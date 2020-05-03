import React from 'react';
import { Switch } from 'react-router-dom';

import { LoginModuleRoutes } from '../../../modules/login/routes';

const ApplicationRoute = () => {
  return <Switch>{LoginModuleRoutes()}</Switch>;
};

export default ApplicationRoute;
