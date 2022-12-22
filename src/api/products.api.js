
import axios from 'axios';

export const getProducts =  async () => {
   let result = await axios.get(`http://localhost:8000/products`);
   return result;
};

export const getProduct =  async (id) => {
   let result = await axios.get(`http://localhost:8000/products/${id}`);
   return result;
};


export const createProduct =  async (data) => {
   let result = await axios.post(`http://localhost:8000/products`, data);
   return result;
};

export const deleteProduct =  async (id) => {
   let result = await axios.delete(`http://localhost:8000/products/${id}`);
   return result;
};