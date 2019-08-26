import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ChaosRecipePage from './containers/ChaosRecipePage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.CHAOS_RECIPE} component={ChaosRecipePage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
