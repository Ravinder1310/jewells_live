import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true; // If you need to send cookies with requests

// You can also create an instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;
