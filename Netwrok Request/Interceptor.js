import axios from 'axios';
import {contentType} from '../constants/Constants';

const clearStorage = () => {
  localStorage.clear();
  window.location = '/';
};
// axios.defaults.withCredentials = true;
axios.interceptors.request.use(request => {
  let token = localStorage.getItem('token');
  let headers = {
    'Content-Type': contentType,
    Authorization: `Bearer ${token}`,
  };
  request.headers = headers;
  return request;
});

axios.interceptors.response.use(
  async response => {
    return response;
  },
  async err => {
    try {
      if (err?.response?.status === 401) {
        clearStorage();
      }
    } catch (error) {
      return error?.response;
    }
    return err?.response;
  },
);
