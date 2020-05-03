import React, { useState } from 'react';
import { get } from 'lodash';

import RegistrationForm from '../components/registration-form/RegistrationForm';
import RegistrationDetails from '../components/registration-details/RegistrationDetails';
import { PageLayout } from '../../../../shared/styled-components/Layout';
import { validateAlphaNumeric, validateEmail } from '../../../../shared/utils/helper';
import Toast from '../../../../shared/components/toast';
import { DEFAULT_OPTION, callAPI } from '../../../../shared/services/invokeAPI';
import { API_URL } from '../../../../config/apiConfig';

import {
  ALPHANUMERIC,
  EMAIL,
  INITIAL_USERDETAILS,
  INITIAL_USERDETAILS_ERROR,
  ERROR_MESSAGES,
  TOAST_MESSAGES,
} from './constants';

const TOAST_TIME = 3000;

const Registration = () => {
  const [userDetails, setUserDetails] = useState(INITIAL_USERDETAILS);
  const [userDetailsError, setUserDetailsError] = useState(INITIAL_USERDETAILS_ERROR);
  const [showToast, setShowToast] = useState(false);

  const mandatoryValidation = (key) => {
    let isValid = true;
    let errorMessage = '';
    if (userDetails[key].trim() === '') {
      errorMessage = ERROR_MESSAGES[key].mandatory;
      isValid = false;
    }

    return [
      isValid,
      {
        [key]: errorMessage,
      },
    ];
  };

  const valueValidation = async (key) => {
    let isValid;
    let errorMessage = '';
    let ibanError = null;
    if (ALPHANUMERIC.includes(key)) {
      isValid = validateAlphaNumeric(userDetails[key]);
    } else if (EMAIL.includes(key)) {
      isValid = validateEmail(userDetails[key]);
    } else {
      const options = {
        ...DEFAULT_OPTION,
        body: JSON.stringify({
          iban: userDetails[key],
        }),
      };
      const response = await callAPI(API_URL, options);
      isValid = get(response, 'valid', false);
      if (!isValid) {
        ibanError = get(response, 'message', null);
        if (!ibanError) {
          ibanError = ERROR_MESSAGES[key].notValid;
        }
      }
    }
    if (!isValid) {
      errorMessage = ibanError || ERROR_MESSAGES[key].notValid;
    }

    return [
      isValid,
      {
        [key]: errorMessage,
      },
    ];
  };

  const validateUserDetails = async () => {
    let isValidValue = false;
    let errorMessages = {};

    Object.keys(userDetails).map(async (key) => {
      const [isValid, error] = mandatoryValidation(key);
      console.log('iiii', isValid, error);
      isValidValue = isValid;
      errorMessages = { ...errorMessages, ...error };
    });
    if (isValidValue) {
      await Promise.all(
        Object.keys(userDetails).map(async (key) => {
          const [isValidValidation, errorFromValidation] = await valueValidation(key);
          isValidValue = isValidValidation;
          errorMessages = { ...errorMessages, ...errorFromValidation };
        })
      );
    }
    setUserDetailsError(errorMessages);
    console.log(isValidValue, errorMessages);
    return isValidValue;
  };

  const showToastMessage = () => {
    setShowToast(true);
    window.setTimeout(() => {
      setShowToast(false);
    }, TOAST_TIME);
  };

  const handleOnUserInputChange = (key) => (event) => {
    event.persist();
    setUserDetails({
      ...userDetails,
      [key]: event.target.value,
    });
  };

  const handleOnUserInputBlur = (key) => async () => {
    const [isValid, error] = mandatoryValidation(key);
    let errorMessages = { ...userDetailsError, ...error };
    if (isValid) {
      const validationOutput = await valueValidation(key);
      errorMessages = { ...userDetailsError, ...validationOutput[1] };
    }
    setUserDetailsError(errorMessages);
  };

  const handleonSubmit = async () => {
    setUserDetailsError(INITIAL_USERDETAILS_ERROR);
    const isValid = await validateUserDetails();
    if (isValid) {
      showToastMessage();
      setUserDetails(INITIAL_USERDETAILS);
      setUserDetailsError(INITIAL_USERDETAILS_ERROR);
    }
  };

  return (
    <PageLayout>
      <RegistrationForm
        onSubmit={handleonSubmit}
        onChange={handleOnUserInputChange}
        userDetails={userDetails}
        userDetailsError={userDetailsError}
        onBlur={handleOnUserInputBlur}
      />
      <RegistrationDetails userDetails={userDetails}>

      </RegistrationDetails>
      <Toast id="toastRegistration" message={TOAST_MESSAGES.success} visible={showToast} />
    </PageLayout>
  );
};

export default Registration;
