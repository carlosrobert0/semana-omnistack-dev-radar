import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.3.152.13:3333',
});

export default api;