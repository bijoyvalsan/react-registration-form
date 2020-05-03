import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../../../../../shared/styled-components/Card';
import TextField from '../../../../../shared/components/forms/textfield';
import Button from '../../../../../shared/components/forms/button';
import { RegistrationFormWrapper, ButtonWrapper } from './styled-components';

import { LABELS } from './constants';

const RegistrationForm = ({ onChange, onBlur, onSubmit, userDetails, userDetailsError }) => {
  return (
    <Card>
      <RegistrationFormWrapper>
        <h2>{LABELS.HEADING}</h2>
        <TextField
          id="txtFirstName"
          value={userDetails.firstName}
          labelText={LABELS.FIRSTNAME}
          errorText={userDetailsError.firstName}
          onBlur={onBlur('firstName')}
          onChange={onChange('firstName')}
        />
        <TextField
          id="txtLastName"
          value={userDetails.lastName}
          labelText={LABELS.LASTNAME}
          errorText={userDetailsError.lastName}
          onBlur={onBlur('lastName')}
          onChange={onChange('lastName')}
        />
        <TextField
          id="txtEmail"
          value={userDetails.email}
          labelText={LABELS.EMAIL}
          errorText={userDetailsError.email}
          onBlur={onBlur('email')}
          onChange={onChange('email')}
        />
        <TextField
          id="txtIban"
          value={userDetails.iban}
          labelText={LABELS.IBAN}
          errorText={userDetailsError.iban}
          onBlur={onBlur('iban')}
          onChange={onChange('iban')}
        />
      </RegistrationFormWrapper>
      <ButtonWrapper>
        <Button id="btnSubmitRegistration" value={LABELS.SUBMIT} onClick={onSubmit} />
      </ButtonWrapper>
    </Card>
  );
};

RegistrationForm.propTypes = {
  userDetails: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    iban: PropTypes.string,
  }).isRequired,
  userDetailsError: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    iban: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onSubmit: PropTypes.func,
};

RegistrationForm.defaultProps = {
  onChange: (e)=>{},
  onBlur: (e)=>{},
  onSubmit: (e)=>{},
};

export default RegistrationForm;
