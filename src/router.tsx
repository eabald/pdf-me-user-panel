// React
import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
// Components
const Dashboard = lazy(() => import('./pages/dashboard.component'));
const LoggedOut = lazy(() => import('./pages/loggedout.component'));
const Login = lazy(() => import('./pages/login.component'));
const Register = lazy(() => import('./pages/register.component'));

type RouterProps = {};

const Router: React.FC<RouterProps> = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/logout" component={LoggedOut}/>
    <Route path="/register" component={Register}/>
    <Route path="/" component={Dashboard}/>
  </Switch>
);

export default Router;
