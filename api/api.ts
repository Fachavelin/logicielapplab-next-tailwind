import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mailservicebackend.uc.r.appspot.com/api/',
});

//Todo: Configurar Interceptores
/* api.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: localStorage.getItem('token'),
  };

  return config;
});
 */
export default api;
