// @flow

export type NodeMeta = {
  label: string,
  tier: number,
  id: string
};

export type NodeMetaData = {
  data: NodeMeta
};

export type EdgeMetadata = {
  data: {
    source: string,
    target: string
  }
};

export type MapsMetaData = {
  nodes: NodeMetaData[],
  edges: EdgeMetadata[]
};
