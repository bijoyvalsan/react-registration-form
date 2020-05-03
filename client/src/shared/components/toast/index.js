import React from 'react';
import PropTypes from 'prop-types';

import { ToastWrapper } from './styled-components';

const Toast = ({ id, message, visible, ...rest }) => {
  const classes = visible ? 'visible' : '';
  return (
    <ToastWrapper id={id} className={classes}>
      <p>{message}</p>
    </ToastWrapper>
  );
};

Toast.propTypes = {
  id: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  message: PropTypes.string,
};

Toast.defaultProps = {
  visible: false,
  message: '',
};

export default Toast;
