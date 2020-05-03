import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../../../../../shared/styled-components/Card';
import { RegistrationDetailsWrapper } from './styled-components';
import { LABELS } from './constants';

const RegistrationDetails = ({ userDetails }) => {
    const renderUserDetails=(label,value)=>(
        <div className="details-item">
            <label className="details-item-label">{label}</label>
            <label className="details-item-value">{value}</label>
        </div>
    );
  return (
    <RegistrationDetailsWrapper>
      <Card>
        <h2>{LABELS.HEADING}</h2>
        {renderUserDetails(LABELS.FIRSTNAME, userDetails.firstName)}
        {renderUserDetails(LABELS.LASTNAME, userDetails.lastName)}  
        {renderUserDetails(LABELS.EMAIL, userDetails.email)}
        {renderUserDetails(LABELS.IBAN, userDetails.iban)}
      </Card>
    </RegistrationDetailsWrapper>
  );
};

RegistrationDetails.propTypes = {
  userDetails: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    iban: PropTypes.string,
  }).isRequired,
};

RegistrationDetails.defaultProps = {};

export default RegistrationDetails;
