// @flow
import mapsMetaData from './maps.current';
import type { NodeMeta } from './types';
import type { MapId } from '../../../reducers/types';

export const mapsIndex: Map<MapId, number> = new Map();

mapsMetaData.nodes.forEach((node, idx) => {
  mapsIndex.set(node.data.id, idx);
});

mapsMetaData.edges = mapsMetaData.edges.map((edge, idx) => ({
  data: { ...edge.data, id: `e-${idx}` }
}));

export const getNodeMeta = (id: MapId): NodeMeta => {
  const i = mapsIndex.get(id);
  if (i === undefined) {
    throw new Error('Unknown map');
  }
  return mapsMetaData.nodes[i].data;
};

export default mapsMetaData;
