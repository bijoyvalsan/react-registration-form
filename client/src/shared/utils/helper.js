export const validateEmail = (email) => {
  const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  return emailRegex.test(email);
};

export const validateAlphaNumeric = (alphaNumeric) => {
  const alphaNumericRegex = /^[a-zA-Z0-9]+$/i;
  return alphaNumericRegex.test(alphaNumeric);
};
