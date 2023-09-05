import axios from 'axios';

const backEndUrl = 'http://localhost:3000';

export const apiBackEnd = axios.create({
  baseURL: backEndUrl,
  timeout: 1000,
  withCredentials: true,
});

export const getLogin = () => {
  return apiBackEnd
    .get('/client')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
