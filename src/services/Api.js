import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://mock-api.driven.com.br/api/v5/cineflex/',
});

export default Api;
