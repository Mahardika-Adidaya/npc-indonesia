import axios from 'axios';

const apiAmock = axios.create({
  baseURL: 'https://amock.io/api/randibprana/'
});

export default apiAmock;
