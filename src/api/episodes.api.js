
import axios from 'axios';

export const getEpisodes =  async () => {
   return  await axios.get(`https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json`)
};