// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import chaosRecipe from './chaosRecipe';
import maps from './maps';

export default function createRootReducer(history: any) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    chaosRecipe,
    maps
  });
}
