import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MODE == "dev" ? process.env.NEXT_PUBLIC_API_BASE_URL_STAGING : process.env.NEXT_PUBLIC_API_BASE_URL_PROD
});

export default api;
