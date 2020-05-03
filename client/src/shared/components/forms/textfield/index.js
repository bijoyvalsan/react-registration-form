import React from 'react';
import PropTypes from 'prop-types';

import { TextFieldWrapper } from './styled-components';

const TextField = ({ id, labelText, value, errorText, onChange, onBlur }) => {
  return (
    <TextFieldWrapper>
      <label htmlFor={id}>{labelText}</label>
      <input name={id} data-testid={id} id={id}  value={value} onChange={onChange} onBlur={onBlur} />
      <label className="error">{errorText}</label>
    </TextFieldWrapper>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  errorText: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

TextField.defaultProps = {
  labelText: '',
  value: '',
  errorText: '',
  onChange: () => {},
  onBlur: () => {},
};

export default TextField;
