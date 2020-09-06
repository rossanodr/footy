import axios from 'axios';

const apiFake = axios.create({
    baseURL: 'http://192.168.1.4:3333',
});

export default apiFake;