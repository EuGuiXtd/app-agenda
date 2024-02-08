import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const requestLogin = async ({ email, senha }) => {
  const { data } = await api.post('/login', { senha, email });

  return data;
};

export default api;