// @flow
import React, { useEffect, useRef } from 'react';
import Cytoscape from 'cytoscape';
import klay from 'cytoscape-klay';
import styles from './styles.css';
import NavMenu from '../NavMenu/NavMenu';
import routes from '../../constants/routes';
import mapsMetaData, { mapsIndex } from './data';
import Paths from './images/paths';
import type { MapsStore } from '../../reducers/types';

Cytoscape.use(klay);

type MapsHelperProps = {
  maps: MapsStore,
  mapAdd: (itemType: string) => void,
  mapRemove: (itemType: string) => void,
  mapSetOwn: (itemType: string) => void,
  mapUnsetOwn: (itemType: string) => void,
  mapSetShape: (itemType: string) => void,
  mapUnsetShape: (itemType: string) => void,
  mapSetElder: (itemType: string) => void,
  mapUnsetElder: (itemType: string) => void,
  clear: () => void
};

const getMapProps = ele => {
  const tier = ele.data('level');
  const id = ele.data('id');
  const eldered = !!ele.data('eldered');
  let color = '#FFFFFF';
  const textFill = '#FFFFFF';
  const textStroke = '#000000';
  const nameLines = ele
    .data('label')
    .split(' ')
    .reverse();
  if (tier > 5 && tier < 11) {
    color = '#e9e211';
  } else if ((tier > 10 && tier < 16) || eldered) {
    color = '#e60600';
  } else if (id === 'Phoenix') {
    color = '#e18624';
  } else if (id === 'Hydra') {
    color = '#058C46';
  } else if (id === 'Minotaur') {
    color = '#AC7136';
  } else if (id === 'Chimera') {
    color = '#A62DC0';
  } else if (id === 'Shaper') {
    color = '#AAB09C';
  }
  const own = !!ele.data('own');
  const quant = ele.data('quant') || 0;
  const shaped = !!ele.data('shaped');

  return {
    color,
    textStroke,
    textFill,
    nameLines,
    tier,
    own,
    quant,
    shaped,
    eldered
  };
};

const drawNode = ele => {
  const paths = Paths[ele.data('id')];
  const {
    color,
    textStroke,
    textFill,
    nameLines,
    tier,
    own,
    quant,
    shaped,
    eldered
  } = getMapProps(ele);
  const width = 200;
  const height = 200;
  const svg = `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg>
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" 
      xmlns="http://www.w3.org/2000/svg"
      >
        <style type="text/css">
          .txt{
            font-family: Arial, Helvetica, Helvetica Neue, serif;
            font-size: 28px;
            stroke: ${textStroke};
            stroke-width: 1;
            font-weight: 800;
            text-anchor: middle;
          }
          .txt-1{
            fill: ${textFill};
          }
          .txt-2{
            fill: #07F9F6;
          }
          .own{
            fill-opacity: ${own ? 1 : 0.15};
            stroke-opacity: ${own ? 1 : 0.2};
          }
        </style>
        ${nameLines.map(
          (line, idx) =>
            `<text class="txt txt-1"  x="100" y="${50 -
              idx * 30}">${line}</text>`
        )}
        <text 
          class="txt txt-1"
          x="170" y="90"
          fill="${color}"
        >${tier}</text>
        ${
          quant ? `<text class="txt txt-2" x="170" y="170">${quant}</text>` : ''
        }
        <circle class="own" cx="100" cy="120" r="55" stroke="${color}" stroke-width="3"/>
        ${
          shaped || eldered
            ? `<circle class="own" cx="100" cy="120" r="45" stroke="${color}" stroke-width="3"/>`
            : ``
        }
        ${paths.map(
          p =>
            `<path 
                class="own" fill="${color}"
                stroke="${color}" stroke-width="2"
                transform="translate(48,68) scale(1.3)"
                d="${p}"/>`
        )}
      </svg>
    `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const cytoStyles = [];
cytoStyles.push(
  {
    selector: 'node',
    style: {
      height: 200,
      width: 250,
      'background-opacity': 0,
      'background-image': drawNode,
      'background-fit': 'none',
      shape: 'round-rectangle'
    }
  },
  {
    selector: 'edge',
    style: {
      'curve-style': 'bezier',
      width: 6,
      'target-arrow-shape': 'triangle',
      'line-color': '#d0d0d0',
      'target-arrow-color': '#d0d0d0',
      'line-style': 'solid'
    }
  },
  {
    selector: 'edge[?equal]',
    style: {
      'curve-style': 'bezier',
      width: 6,
      'target-arrow-shape': 'none',
      'line-color': '#d0d0d0',
      'target-arrow-color': '#d0d0d0',
      'line-style': 'dashed'
    }
  }
);

const mergedData = data => {
  const { nodes } = mapsMetaData;
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(data)) {
    const i = mapsIndex.get(key);
    if (i !== undefined) {
      nodes[i].data = { ...nodes[i].data, ...value };
    }
  }
  return {
    nodes,
    edges: mapsMetaData.edges
  };
};

const MapsHelper = (props: MapsHelperProps) => {
  const {
    maps,
    mapAdd,
    mapRemove,
    mapUnsetOwn,
    mapSetOwn,
    mapSetShape,
    mapUnsetShape,
    mapSetElder,
    mapUnsetElder,
    clear
  } = props;
  const graphRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const [grapf, setGraph] = React.useState('');
  useEffect(() => {
    if (grapf) {
      const newElements = mergedData(maps.data);
      grapf.json({ elements: newElements });
    }
  }, [maps]);
  useEffect(() => {
    const cyto = new Cytoscape({
      container: graphRef.current,
      elements: mergedData(maps.data),
      ready() {},
      layout: {
        name: 'klay',
        options: {
          nodeDimensionsIncludeLabels: false,
          klay: {
            direction: 'DOWN',
            fixedAlignment: 'LEFTDOWN ',
            nodeLayering: 'INTERACTIVE',
            spacing: 100
          }
        }
      },
      style: cytoStyles
    });
    cyto.on('click', 'node', evt => {
      const id = evt.target.id();
      if (evt.originalEvent.shiftKey) {
        if (evt.originalEvent.ctrlKey) {
          mapSetElder(id);
        } else {
          mapSetOwn(id);
        }
      } else if (evt.originalEvent.ctrlKey) {
        mapSetShape(id);
      } else {
        mapAdd(id);
      }
    });
    cyto.on('cxttap', 'node', evt => {
      const id = evt.target.id();
      if (evt.originalEvent.shiftKey) {
        if (evt.originalEvent.ctrlKey) {
          mapUnsetElder(id);
        } else {
          mapUnsetOwn(id);
        }
      } else if (evt.originalEvent.ctrlKey) {
        mapUnsetShape(id);
      } else {
        mapRemove(id);
      }
    });
    // cyto.zoomingEnabled(false);
    // cyto.panningEnabled(false);
    setGraph(cyto);
  }, []);

  return (
    <div className="vp-height full-width non-selectable column">
      <div
        className={`row justify-center items-center ${styles.buttonsContainer}`}
      >
        <button type="button" className="btn col-auto" onClick={clear}>
          Clear
        </button>
      </div>
      <div
        className={`row justify-center items-center ${styles.contentContainer}`}
      >
        <div
          style={{
            height: '100%',
            width: '100%'
          }}
          ref={graphRef}
        />
      </div>
      <NavMenu exclude={routes.MAPS} />
    </div>
  );
};

export default MapsHelper;
