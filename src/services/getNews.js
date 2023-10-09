const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '91f5018aa123402dbc0b89687fac3fde';

export const getNews = async searchText => {
  const data = await fetch(`${BASE_URL}/everything?q=${searchText}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });
  return await data.json();
};
export const getTopNews = async () => {
  const data = await fetch(`${BASE_URL}/top-headlines?country=us`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });
  return await data.json();
};
