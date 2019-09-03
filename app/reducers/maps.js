// @flow
import { remote } from 'electron';
import {
  MAP_ADD,
  MAP_REMOVE,
  MAP_SET_OWN,
  MAP_SET_SHAPE,
  MAP_SET_ELDER,
  MAP_CLEAR
} from '../actions/maps';
import type { MapAction, MapsStore, MapData, MapsData, MapId } from './types';
import mapsMetaData, { getNodeMeta } from '../components/Maps/data';
import type { NodeMeta } from '../components/Maps/data/types';

const getClearData = () => {
  const data: MapsData = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const node of mapsMetaData.nodes) {
    data[node.data.id] = {
      shaped: false,
      own: false,
      quant: 0,
      eldered: false,
      level: node.data.tier
    };
  }
  return data;
};

const defaultState: MapsStore = {
  data: getClearData()
};

const initialState: MapsStore =
  (remote && remote.getGlobal('pstore').get('Maps')) || defaultState;

export default function maps(
  state: MapsStore = initialState,
  action: MapAction
) {
  let newState: MapsStore = state;
  const mapId: MapId = action.payload && action.payload.id;
  const mapData: MapData = mapId
    ? state.data[mapId] || {
        quant: 0
      }
    : undefined;
  const mapMeta: NodeMeta = mapId && getNodeMeta(mapId);
  switch (action.type) {
    case MAP_ADD:
      newState = {
        data: {
          ...state.data,
          [mapId]: { ...mapData, quant: mapData.quant + 1 }
        }
      };
      break;
    case MAP_REMOVE:
      if (mapData.quant > 0) {
        newState = {
          data: {
            ...state.data,
            [mapId]: { ...mapData, quant: mapData.quant - 1 }
          }
        };
      }
      break;
    case MAP_SET_OWN:
      if (mapData.own !== action.payload.own) {
        newState = {
          data: {
            ...state.data,
            [mapId]: { ...mapData, own: action.payload.own }
          }
        };
      }
      break;
    case MAP_SET_ELDER:
      if (!mapData.shaped && mapData.eldered !== action.payload.eldered) {
        newState = {
          data: {
            ...state.data,
            [mapId]: {
              ...mapData,
              eldered: action.payload.elder,
              level: action.payload.elder ? 16 : mapMeta.tier
            }
          }
        };
      }
      break;
    case MAP_SET_SHAPE:
      if (!mapData.eldered && mapMeta.tier < 11) {
        if (mapData.shaped !== action.payload.shape) {
          newState = {
            data: {
              ...state.data,
              [mapId]: {
                ...mapData,
                shaped: action.payload.shape,
                level: action.payload.shape ? mapMeta.tier + 5 : mapMeta.tier
              }
            }
          };
        }
      }
      break;
    case MAP_CLEAR:
      newState = { data: getClearData() };
      break;
    default:
      newState = state;
  }
  if (remote) {
    remote.getGlobal('pstore').set('Maps', newState);
  }
  return newState;
}
