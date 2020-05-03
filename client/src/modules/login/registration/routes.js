import React from 'react';
import { Route } from 'react-router-dom';
import LazyLoader from '../../../shared/components/lazy-loader/LazyLoader';

const Routes = () => {
  const registrationRoute = () => () => {
    const registration = React.lazy(() => import('../registration/container/Registration'));
    return <LazyLoader lazyComponent={registration} />;
  };

  return <Route exact path="/" component={registrationRoute()} />;
};

export default Routes;
