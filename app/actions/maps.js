// @flow
import type { MapAction, MapId } from '../reducers/types';

export const MAP_ADD = 'MAP_ADD';
export const MAP_REMOVE = 'MAP_REMOVE';
export const MAP_SET_OWN = 'MAP_SET_OWN';
export const MAP_SET_SHAPE = 'MAP_SET_SHAPE';
export const MAP_SET_ELDER = 'MAP_SET_ELDER';
export const MAP_CLEAR = 'MAP_CLEAR';

export function mapAdd(id: MapId): MapAction {
  return {
    type: MAP_ADD,
    payload: {
      id
    }
  };
}

export function mapRemove(id: MapId): MapAction {
  return {
    type: MAP_REMOVE,
    payload: {
      id
    }
  };
}

export function mapSetOwn(id: MapId): MapAction {
  return {
    type: MAP_SET_OWN,
    payload: {
      id,
      own: true
    }
  };
}

export function mapUnsetOwn(id: MapId): MapAction {
  return {
    type: MAP_SET_OWN,
    payload: {
      id,
      own: false
    }
  };
}

export function mapSetShape(id: MapId): MapAction {
  return {
    type: MAP_SET_SHAPE,
    payload: {
      id,
      shape: true
    }
  };
}

export function mapSetElder(id: MapId): MapAction {
  return {
    type: MAP_SET_ELDER,
    payload: {
      id,
      elder: true
    }
  };
}

export function mapUnsetElder(id: MapId): MapAction {
  return {
    type: MAP_SET_ELDER,
    payload: {
      id,
      elder: false
    }
  };
}

export function mapUnsetShape(id: MapId): MapAction {
  return {
    type: MAP_SET_SHAPE,
    payload: {
      id,
      shape: false
    }
  };
}

export function clear(): MapAction {
  return {
    type: MAP_CLEAR
  };
}
