import axios from 'axios';

export const login = async (data) => {
   return await axios.post(`http://localhost:8000/users/login`, data);
};

export const logout = async (data) => {
   return await axios.put(`http://localhost:8000/users/logout`, data);
};

export const authenticate = async (data) => {
   return await axios.delete(`http://localhost:8000/users/authenticate`, data);
};