import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../auth';
import { ROUTE_LOGIN } from '../../utils/routes';
import { IonSpinner } from '@ionic/react';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (currentUser === undefined) {
          return (
            <div className="spinner-container">
              <IonSpinner name="dots" />
            </div>
          );
        }

        return currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={ROUTE_LOGIN} />;
      }}
    />
  );
};

export default PrivateRoute;
