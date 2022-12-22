
import axios from 'axios';

export const getProducts =  async () => {
   let result = await axios.get(`http://localhost:8000/products`);
   return result;
};

export const getProduct =  async (id) => {
   let result = await axios.get(`http://localhost:8000/products/${id}`);
   return result;
};