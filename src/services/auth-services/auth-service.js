import axios from 'axios';

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

export const unSetToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const signUp = async body => {
  const response = await axios.post('/users', body);
  return response.data;
};

export const login = async body => {
  const response = await axios.post('/auth/login', body);
  setToken(`Bearer ${response.data.access_token}`);
  return response.data;
};

export const getProfile = async () => {
  const response = await axios.get('/auth/profile');
  //   unSetToken(`Bearer ${response.data.access_token}`);
  return response.data;
};
