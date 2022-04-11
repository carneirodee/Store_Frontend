
import axios from 'axios';

export const getEpisodes = () => {
    axios.get(`https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
};