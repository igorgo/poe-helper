import chaosRecipe from '../../app/reducers/chaosRecipe';
import {
  RESET_CHAOS_RECIPE,
  DEC_CHAOS_RECIPE,
  INC_CHAOS_RECIPE,
  MINUS_SET_CHAOS_RECIPE
} from '../../app/actions/chaosRecipe';

const state = {
  weapon: 0,
  helmet: 0,
  body: 1,
  glove: 0,
  boot: 0,
  ring: 0,
  amulet: 0,
  belt: 0
};

describe('reducers', () => {
  describe('chaosRecipe', () => {
    it('should handle initial state', () => {
      expect(chaosRecipe(undefined, {})).toMatchSnapshot();
    });

    it('should handle INC_CHAOS_RECIPE', () => {
      expect(
        chaosRecipe(state, {
          type: INC_CHAOS_RECIPE,
          payload: { itemType: 'body' }
        })
      ).toMatchSnapshot();
    });

    it('should handle DEC_CHAOS_RECIPE', () => {
      expect(
        chaosRecipe(state, {
          type: DEC_CHAOS_RECIPE,
          payload: { itemType: 'body' }
        })
      ).toMatchSnapshot();
    });

    it('should handle MINUS_SET_CHAOS_RECIPE', () => {
      expect(
        chaosRecipe(state, { type: MINUS_SET_CHAOS_RECIPE })
      ).toMatchSnapshot();
    });

    it('should handle RESET_CHAOS_RECIPE', () => {
      expect(
        chaosRecipe(state, { type: RESET_CHAOS_RECIPE })
      ).toMatchSnapshot();
    });

    it('should handle unknown action type', () => {
      expect(chaosRecipe(state, { type: 'unknown' })).toMatchSnapshot();
    });
  });
});
