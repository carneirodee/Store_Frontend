
import axios from 'axios';

export const getCart =  async (id) => {
   let result = await axios.get(`http://localhost:8000/cart/`+id);
   return result;
};