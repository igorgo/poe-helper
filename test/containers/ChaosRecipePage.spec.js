import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import ChaosRecipePage from '../../app/containers/ChaosRecipePage';
import { configureStore } from '../../app/store/configureStore';

Enzyme.configure({ adapter: new Adapter() });

let app;
function setup(initialState) {
  const store = configureStore(initialState);
  const history = createBrowserHistory();
  const provider = (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ChaosRecipePage />
      </ConnectedRouter>
    </Provider>
  );
  app = mount(provider);
  return {
    app,
    buttons: app.find('button'),
    bodyRow: app.find('PoeItemRow').at(2),
    bodyFirst: app.find('#body0').first()
  };
}

describe('containers', () => {
  describe('App', () => {
    it('should first body have value true', () => {
      const { bodyFirst } = setup();
      expect(bodyFirst.props().value).toBe(false);
    });

    it('body elements have to change value after row and button clicks', () => {
      const { bodyRow } = setup();
      bodyRow.childAt(0).simulate('click');
      expect(
        app
          .find('#body0')
          .first()
          .props().value
      ).toBe(true);
      bodyRow.childAt(0).simulate('contextmenu');
      expect(
        app
          .find('#body0')
          .first()
          .props().value
      ).toBe(false);
      bodyRow.childAt(0).simulate('click');
      bodyRow.childAt(0).simulate('click');
      expect(
        app
          .find('#body1')
          .first()
          .props().value
      ).toBe(true);
      app
        .find('button')
        .at(1)
        .simulate('click');
      expect(
        app
          .find('#body1')
          .first()
          .props().value
      ).toBe(false);
      expect(
        app
          .find('#body0')
          .first()
          .props().value
      ).toBe(true);
      app
        .find('button')
        .at(0)
        .simulate('click');
      expect(
        app
          .find('#body0')
          .first()
          .props().value
      ).toBe(false);
    });
  });
});
