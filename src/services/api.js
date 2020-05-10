import axios from 'axios';
import { Alert } from 'react-native';

const api = axios.create({
  baseURL: 'https://api.github.com',
});
api.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 404) {
      Alert.alert('Usuário não encontrado');
    }

    return Promise.reject(err);
  }
);

export default api;
