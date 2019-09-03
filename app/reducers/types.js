import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type ChaosRecipeStore = {
  weapon: number,
  helmet: number,
  body: number,
  glove: number,
  boot: number,
  ring: number,
  amulet: number,
  belt: number
};

export type MapData = {
  own: boolean,
  quant: number,
  shaped: boolean,
  eldered: boolean,
  level: number
};

export type MapId = string;
export type MapsData = { [mapId: MapId]: MapData };

export type MapsStore = {
  data: MapsData
};

export type appStateType = {
  +counter: number,
  +chaosRecipe: ChaosRecipeStore,
  +maps: MapsStore
};

export type ChaosRecipeItemType =
  | 'weapon'
  | 'helmet'
  | 'body'
  | 'glove'
  | 'boot'
  | 'ring'
  | 'amulet'
  | 'belt';

export type chaosRecipePayload = {
  itemType?: ChaosRecipeItemType
};

export type MapPayload = {
  id?: MapId,
  own?: boolean,
  shape?: boolean,
  elder?: boolean
};

export type BaseAction = {
  +type: string
};

export type ChaosRecipeAction = {
  +type: string,
  +payload?: chaosRecipePayload
};

export type MapAction = {
  +type: string,
  +payload?: MapPayload
};

export type Action = BaseAction | ChaosRecipeAction;

export type GetState = () => appStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
