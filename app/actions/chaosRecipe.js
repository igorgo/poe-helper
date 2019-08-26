// @flow
import type { ChaosRecipeAction, ChaosRecipeItemType } from '../reducers/types';

export const INC_CHAOS_RECIPE = 'INC_CHAOS_RECIPE';
export const DEC_CHAOS_RECIPE = 'DEC_CHAOS_RECIPE';
export const RESET_CHAOS_RECIPE = 'RESET_CHAOS_RECIPE';
export const MINUS_SET_CHAOS_RECIPE = 'MINUS_SET_CHAOS_RECIPE';

export function increment(itemType: ChaosRecipeItemType): ChaosRecipeAction {
  return {
    type: INC_CHAOS_RECIPE,
    payload: {
      itemType
    }
  };
}

export function decrement(itemType: ChaosRecipeItemType): ChaosRecipeAction {
  return {
    type: DEC_CHAOS_RECIPE,
    payload: {
      itemType
    }
  };
}

export function reset(): ChaosRecipeAction {
  return {
    type: RESET_CHAOS_RECIPE
  };
}

export function minusSet(): ChaosRecipeAction {
  return {
    type: MINUS_SET_CHAOS_RECIPE
  };
}
