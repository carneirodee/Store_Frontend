
import axios from 'axios';

export const getInfo = () => {
    axios.get(`https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
};