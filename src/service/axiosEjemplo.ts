import axios from "axios";

const axiosInstanceEjemplo = axios.create({
    baseURL: "http://localhost:8080/", // URL base de tu API
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstanceEjemplo;
