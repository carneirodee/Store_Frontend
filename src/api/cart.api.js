
import axios from 'axios';

export const getCart = async (id) => {
   return await axios.get(`http://localhost:8000/carts/user/${id}`);
};

export const createCart = async (data) => {
   return await axios.post(`http://localhost:8000/carts`, data);
};

export const updateCart = async (id, data) => {
   return await axios.put(`http://localhost:8000/carts/${id}`, data);
};

export const deleteCart = async (id) => {
   return await axios.delete(`http://localhost:8000/carts/${id}`);
};