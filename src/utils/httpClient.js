import axios from 'axios';
import { CONFIG } from '../config';

const HEADERS = {
  'Content-Type': 'application/json',
};

export const HttpClient = axios.create({
  baseURL: `${CONFIG}`,
  headers: {
    ...HEADERS,
  },
});

HttpClient.interceptors.request.use((config) => {
  return config;
});

HttpClient.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
