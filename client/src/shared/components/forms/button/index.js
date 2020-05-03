import React from 'react';
import PropTypes from 'prop-types';

import { Button as StyledButton } from './styled-components';

const Button = ({ value, ...rest }) => {
  return <StyledButton {...rest}>{value}</StyledButton>;
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  value: '',
  onClick: () => {},
};

export default Button;
