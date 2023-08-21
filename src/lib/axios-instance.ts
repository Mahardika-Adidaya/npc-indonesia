import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://64e1e3bdab00373588187d53.mockapi.io/api/v1/'
});

export default axiosInstance;
