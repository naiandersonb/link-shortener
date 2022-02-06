import axios from "axios";

export const key = 'c38755b4b58979b0a530d46c2e0af5e1efb36d83';


const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;