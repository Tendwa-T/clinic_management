import axios from "axios";

const instance = axios.create({
    baseURL: 'https://clinic-backend-three.vercel.app/',
});

export default instance;