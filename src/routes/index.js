import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import FoodDetails from '../pages/FoodDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/food-details/:foodId" component={FoodDetails} />
  </Switch>
);

export default Routes;
