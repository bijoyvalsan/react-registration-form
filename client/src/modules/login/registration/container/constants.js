export const ALPHANUMERIC = ['firstName', 'lastName'];
export const EMAIL = ['email'];

export const INITIAL_USERDETAILS = {
  firstName: '',
  lastName: '',
  email: '',
  iban: '',
};

export const INITIAL_USERDETAILS_ERROR = {
  ...INITIAL_USERDETAILS,
};

export const ERROR_MESSAGES = {
  firstName: {
    mandatory: 'First name is required.',
    notValid: 'Value should be alphanumeric.',
  },
  lastName: {
    mandatory: 'Last name is required.',
    notValid: 'Value should be alphanumeric.',
  },
  email: {
    mandatory: 'Email is required.',
    notValid: 'Value should be a valid email.',
  },
  iban: {
    mandatory: 'Iban is required.',
    notValid: 'Value should be a valid iban.',
  },
};

export const TOAST_MESSAGES = {
  success: 'Congratz! All data is valid',
};
