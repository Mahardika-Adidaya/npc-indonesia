import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://amock.io/api/randibprana/'
});

export default axiosInstance;
