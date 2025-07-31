import axios from "axios";
import localforage from "localforage";


const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL

// Primary backend api
const backendApi = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

// Request interceptors
backendApi.interceptors.request.use(
    async (config) => {
        const token = await localforage.getItem<string>('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptors
backendApi.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
            console.error('Unauthorized request. Clearing session and redirecting to login...');

            await localforage.removeItem('authToken');
            await localforage.removeItem('user');

            delete backendApi.defaults.headers.common['Authorization'];

            window.location.replace('/login');
        }
        return Promise.reject(error);
    }
);

export default backendApi;
