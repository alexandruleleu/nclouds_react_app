export const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export const BASE_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/countries'
    : 'http://countryapi.gear.host/v1/Country/getCountries';

export const PAGE_LIMIT = 20;
export const TOTAL_COUNT = 250;
export const CUSTOM_MESSAGES = {
  createAccount: 'Your account it was successfully created',
  checkEmail: 'Unfortunately this email is not active yet.',
};
