
import axios from 'axios';

export const getProducts =  async () => {
   let result = await axios.get(`http://localhost:8000/products`);
   return result;
};