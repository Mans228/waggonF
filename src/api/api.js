// api.js

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proto.waggon24.com/demoProtokoll-0.0.1-SNAPSHOT', // Replace with your API base URLhttp://localhost:8080/   https://proto.waggon24.com/demoProtokoll-0.0.1-SNAPSHOT
});

// Add request interceptor
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;

    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
