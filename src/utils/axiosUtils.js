import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/api/V1';

export const setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = token;
}

export default axios;