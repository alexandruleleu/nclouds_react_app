import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//routes
import { ROUTE_DEFAULT, ROUTE_HOME, ROUTE_LOGIN, ROUTE_REGISTRATION } from '../../../utils/routes';

//components
import Login from '../../pages/login';
import Registration from '../../pages/registration';
import Home from '../../pages/home';
import MainLayout from '../../../components/mainLayout';
import PrivateRoute from '../../../components/privateRoute';

// -----------------------
// App Router Component
// -----------------------
const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={ROUTE_LOGIN}
          render={(props) => (
            <MainLayout {...props}>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          exact
          path={ROUTE_REGISTRATION}
          render={(props) => (
            <MainLayout {...props}>
              <Registration />
            </MainLayout>
          )}
        />
        <PrivateRoute exact path={ROUTE_HOME} component={Home} />
        <PrivateRoute exact path={`${ROUTE_HOME}/:filter`} component={Home} />
        <Route path={ROUTE_DEFAULT} exact render={() => <Redirect to={ROUTE_HOME} />} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
