import axios from 'axios';

export const loginAuth = async (data) => {
   return await axios.post(`http://localhost:8000/users/login`, data);
};

export const logoutAuth = async (data) => {
   return await axios.post(`http://localhost:8000/users/logout`, data);
};

export const authenticateAuth = async (data) => {
   return await axios.post(`http://localhost:8000/users/authenticate`, data);
};