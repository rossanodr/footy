import axios from 'axios';

const apiPlayer = axios.create({
    baseURL: 'https://www.sofascore.com/player',
});

export default apiPlayer;