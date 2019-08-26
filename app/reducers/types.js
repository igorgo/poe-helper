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

export type appStateType = {
  +counter: number,
  +chaosRecipe: ChaosRecipeStore
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

export type BaseAction = {
  +type: string
};

export type ChaosRecipeAction = {
  +type: string,
  +payload?: chaosRecipePayload
};

export type Action = BaseAction | ChaosRecipeAction;

export type GetState = () => appStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
