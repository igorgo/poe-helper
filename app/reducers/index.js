// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import chaosRecipe from './chaosRecipe';

export default function createRootReducer(history: any) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    chaosRecipe
  });
}
