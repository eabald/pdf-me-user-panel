// React
import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from './redux/root-reducer';

// Components
const Dashboard = lazy(
  () => import('./components/dashboard-page/dashboard.component')
);
const LoggedOut = lazy(
  () => import('./components/loggedout-page/loggedout.component')
);
const Login = lazy(() => import('./components/login-page/login.component'));
const Register = lazy(
  () => import('./components/register-page/register.component')
);
const Limits = lazy(() => import('./components/limits-page/limits.component'));
const Templates = lazy(
  () => import('./components/templates-page/templates.component')
);

type RouterProps = {};

const Router: React.FC<RouterProps> = () => {
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  return loggedIn ? (
    <Switch>
      <Route path="/logout" component={LoggedOut} />
      <Route path="/login">
        <Redirect to="/" />
      </Route>
      <Route path="/limits" component={Limits} />
      <Route path="/templates" component={Templates} />
      <Route path="/register">
        <Redirect to="/" />
      </Route>
      <Route path="/" component={Dashboard} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={LoggedOut} />
      <Route path="/register" component={Register} />
      <Route path="/limits">
        <Redirect to="/login" />
      </Route>
      <Route path="/templates">
        <Redirect to="/login" />
      </Route>
      <Route path="/dashboard">
        <Redirect to="/login" />
      </Route>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};

export default Router;
