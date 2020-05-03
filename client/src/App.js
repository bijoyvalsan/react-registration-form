import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ApplicationRoute from './shared/components/application-route/ApplicationRoute';

const App = () => {
  return (
    <BrowserRouter>
      <ApplicationRoute />
    </BrowserRouter>
  );
};

export default App;
