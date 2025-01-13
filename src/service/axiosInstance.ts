import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        'Content-Type': 'application/json',
    }
})

// Interceptor de solicitud (opcional)
axiosInstance.interceptors.request.use(
    (config) => {
        // Agrega token de autorización si es necesario
        const token = localStorage.getItem('token');
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor de respuesta (opcional)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Manejo de errores
        if (error.response) {
            console.error('Error en la respuesta:', error.response.data);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;