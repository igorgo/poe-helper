// @flow
import { remote } from 'electron';
import {
  INC_CHAOS_RECIPE,
  DEC_CHAOS_RECIPE,
  RESET_CHAOS_RECIPE,
  MINUS_SET_CHAOS_RECIPE
} from '../actions/chaosRecipe';
import type { ChaosRecipeAction, ChaosRecipeStore } from './types';
import { rows } from '../components/ChaosRecipe/ChaosRecipe';

const defaultState: ChaosRecipeStore = {
  weapon: 0,
  helmet: 0,
  body: 0,
  glove: 0,
  boot: 0,
  ring: 0,
  amulet: 0,
  belt: 0
};

const initialState: ChaosRecipeStore =
  (remote && remote.getGlobal('pstore').get('ChaosRecipe')) || defaultState;

const minusSet = (state: ChaosRecipeStore): ChaosRecipeStore => {
  const newState = {};
  Object.keys(state).forEach(i => {
    const newCount = state[i] - rows[i].length / 6;
    newState[i] = newCount < 0 ? 0 : newCount;
  });
  return newState;
};

export default function chaosRecipe(
  state: ChaosRecipeStore = initialState,
  action: ChaosRecipeAction
) {
  const itemType = action.payload ? action.payload.itemType : undefined;
  let newState = state;
  switch (action.type) {
    case INC_CHAOS_RECIPE:
      if (itemType && state[itemType] !== rows[itemType].length) {
        newState = { ...state, [itemType]: state[itemType] + 1 };
      }
      break;
    case DEC_CHAOS_RECIPE:
      if (itemType && state[itemType] !== 0) {
        newState = { ...state, [itemType]: state[itemType] - 1 };
      }
      break;
    case RESET_CHAOS_RECIPE:
      newState = defaultState;
      break;
    case MINUS_SET_CHAOS_RECIPE:
      newState = minusSet(state);
      break;
    default:
      newState = state;
  }
  if (remote) {
    remote.getGlobal('pstore').set('ChaosRecipe', newState);
  }
  return newState;
}
