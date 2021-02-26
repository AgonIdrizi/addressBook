import React from 'react';
import { Switch } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import Home from '../screens/Home/Home';
import Settings from '../screens/Settings/Settings';

const Routes: React.FunctionComponent = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route path="*" render={() => <Redirect to="/" push />} />
    </Switch>
  );
};

export default Routes;
