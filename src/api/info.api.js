
import axios from 'axios';

export const getInfo = () => {
    return axios.get(`https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json`);
};