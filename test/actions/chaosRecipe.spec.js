import * as actions from '../../app/actions/chaosRecipe';

describe('actions', () => {
  it('should increment should create increment action', () => {
    expect(actions.increment('body')).toMatchSnapshot();
  });

  it('should decrement should create decrement action', () => {
    expect(actions.decrement('body')).toMatchSnapshot();
  });

  it('should reset should create reset action', () => {
    expect(actions.reset()).toMatchSnapshot();
  });

  it('should minusSet should create minusSet action', () => {
    expect(actions.minusSet()).toMatchSnapshot();
  });
});
