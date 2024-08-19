import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:44301/api'
});

instance.interceptors.request.use((config) => {
    const expiration = localStorage.getItem('expiration');
  
      const currentTime = new Date().getTime();
      const expirationTime = new Date(expiration).getTime();
  
      if (currentTime > expirationTime) {
        // Token has expired, remove it from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('username');
      }
  
    return config;
  });  

export default instance;