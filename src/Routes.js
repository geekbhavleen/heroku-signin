import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/p-dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );

};

export default Routes;