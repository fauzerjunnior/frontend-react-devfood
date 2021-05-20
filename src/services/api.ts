/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-nodejs-devfood.herokuapp.com/',
});

export const setBearerToken = (token: string): string => {
  api.defaults.headers.authorization = `Bearer ${token}`;

  return token;
};

export const createUser = (
  name: string,
  email: string,
  password: string,
): Promise<any> => {
  return api.post('auth/register', {
    name,
    email,
    password,
  });
};

interface userLoginProps {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
  };
}

export const loginUser = (email: string, password: string): Promise<any> => {
  return api.post('auth/login', {
    email,
    password,
  });
};

export const listPlaces = (): Promise<any> => {
  return api.get('products');
};

export default api;
