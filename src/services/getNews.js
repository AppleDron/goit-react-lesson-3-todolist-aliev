const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '91f5018aa123402dbc0b89687fac3fde';

export const getNews = searchText => {
  return fetch(`${BASE_URL}/everything?q=${searchText}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });
};
