// React
import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from './redux/root-reducer';

// Components
const Dashboard = lazy(() => import('./pages/dashboard.component'));
const LoggedOut = lazy(() => import('./pages/loggedout.component'));
const Login = lazy(() => import('./pages/login.component'));
const Register = lazy(() => import('./pages/register.component'));

type RouterProps = {};

const Router: React.FC<RouterProps> = () => {
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  return (
    <Switch>
      {loggedIn ? (
        <>
          <Route path="/logout" component={LoggedOut} />
          <Route path="/login">
            <Redirect to="/" />
          </Route>
          <Route path="/register">
            <Redirect to="/" />
          </Route>
          <Route path="/" component={Dashboard} />
        </>
      ) : (
        <>
          <Route path="/login" component={Login} />
          <Route path="/logout" >
            <Redirect to="/login" />
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/dashboard">
            <Redirect to="/login" />
          </Route>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
        </>
      )}
    </Switch>
  );
};

export default Router;
