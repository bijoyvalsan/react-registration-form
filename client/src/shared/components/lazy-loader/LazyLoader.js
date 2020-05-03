import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyLoader = ({ lazyComponent }) => {
  const ComponentToLoad = lazyComponent;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentToLoad />
    </Suspense>
  );
};

LazyLoader.propTypes = {
  lazyComponent: PropTypes.object,
};

export default LazyLoader;
