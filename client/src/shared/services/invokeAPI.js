import { get } from 'lodash';

export const DEFAULT_OPTION = {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const callAPI = async (url, options = DEFAULT_OPTION) => {
  const response = await fetch(url, options).catch((err) => {
    return { error: err };
  });
  if (get(response, 'body',null)) {
    return response.json();
  }
  return response;
};
