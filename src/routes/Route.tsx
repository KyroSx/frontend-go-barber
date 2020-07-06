import React from 'react';
import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  const isSigned = Boolean(user);

  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate === isSigned) {
          return <Component />;
        }

        return (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
