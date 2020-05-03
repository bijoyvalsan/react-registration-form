const envApiURL = process.env.REACT_APP_API_URL;

export const API_URL = envApiURL || (process.env.NODE_ENV !== 'production' && 'http://localhost:3050');
