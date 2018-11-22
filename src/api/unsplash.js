import axios from 'axios';
const API_KEY = `${process.env.REACT_APP_API_KEY.substring(0, process.env.REACT_APP_API_KEY.length - 2)}`;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${API_KEY}`
    }
});
console.log(process.env)
console.log(API_KEY)