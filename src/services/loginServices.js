import axios from 'axios';

// Recibiendo cookies
axios.defaults.withCredentials = true;

const baseUrl = 'http://localhost:3000/api/login';
const loginPost = datos => {
  const res = axios.post(baseUrl, datos);
  return res;
};

export { loginPost };
