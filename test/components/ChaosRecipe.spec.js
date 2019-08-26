import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ChaosRecipe, {
  PoeItemRow
} from '../../app/components/ChaosRecipe/ChaosRecipe';

Enzyme.configure({ adapter: new Adapter() });

const counts = {
  weapon: 0,
  helmet: 0,
  body: 1,
  glove: 0,
  boot: 0,
  ring: 0,
  amulet: 0,
  belt: 0
};

function setup() {
  const actions = {
    increment: spy(),
    reset: spy(),
    minusSet: spy(),
    decrement: spy()
  };
  const component = shallow(<ChaosRecipe counts={counts} {...actions} />);
  return {
    component,
    actions,
    buttons: component.find('button'),
    bodyRow: component.find('PoeItemRow').at(2)
  };
}

function setupRow() {
  const actions = {
    onIncrement: spy(),
    onDecrement: spy()
  };
  return shallow(
    <PoeItemRow
      type="body"
      length={6}
      height={3}
      width={2}
      value={2}
      {...actions}
    />
  );
}

describe('ChaosRecipe component', () => {
  it('should contains body row with value 1', () => {
    const { bodyRow } = setup();
    console.log(bodyRow.debug());
    console.log(bodyRow.debug());
    expect(bodyRow.props().value).toBe(1);
  });

  it('should call increment on PoeItemRow click', () => {
    const { bodyRow, actions } = setup();
    bodyRow.simulate('increment');
    expect(actions.increment.called).toBe(true);
  });

  it('should call decrement on PoeItemRow click', () => {
    const { bodyRow, actions } = setup();
    bodyRow.simulate('decrement');
    expect(actions.decrement.called).toBe(true);
  });

  it('should first button should call reset', () => {
    const { buttons, actions } = setup();
    buttons.at(0).simulate('click');
    expect(actions.reset.called).toBe(true);
  });

  it('should second button should call minusSet', () => {
    const { buttons, actions } = setup();
    buttons.at(1).simulate('click');
    expect(actions.minusSet.called).toBe(true);
  });

  it('should 2nd items should have value true', () => {
    const component = setupRow();
    expect(
      component
        .find('PoeItem')
        .at(1)
        .props().value
    ).toBe(true);
  });

  it('should 3rd items should have value false', () => {
    const component = setupRow();
    expect(
      component
        .find('PoeItem')
        .at(2)
        .props().value
    ).toBe(false);
  });

  it('should match exact snapshot', () => {
    const { actions } = setup();
    const counter = (
      <div>
        <Router>
          <ChaosRecipe counts={counts} {...actions} />
        </Router>
      </div>
    );
    const tree = renderer.create(counter).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
