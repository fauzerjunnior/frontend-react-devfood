import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Offers from '../pages/Offers';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/create-account" exact component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/offers" component={Offers} isPrivate />
  </Switch>
);

export default Routes;
