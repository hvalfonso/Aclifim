import axios from "axios";

const axiosInstanceEjemplo = axios.create({
    baseURL: "http://localhost:8080/", // Usa una variable de entorno si está disponible
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor para incluir token en cada solicitud si está disponible
axiosInstanceEjemplo.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor para manejar respuestas y errores globalmente
axiosInstanceEjemplo.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Error en la API:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstanceEjemplo;
