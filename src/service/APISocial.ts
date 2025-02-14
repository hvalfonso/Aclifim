import { ActualizarDatosSocialesProps, DatosSocialesProps } from "../types/sociales";
import axiosInstance from "./axiosInstance";

export const obtenerDatosSocial = async (id: number) => {
    try {
        return await axiosInstance.get(`/datosSocial/${id}`)
    } catch (error) {
        console.error("Error al obtener datos sociales:", error);
        throw error; // Lanza el error para manejarlo en el frontend
    }
}

export const crearDatosSocial = async (data: DatosSocialesProps) => {
    try {
        return await axiosInstance.post(`/datosSocial`, data)
    } catch (error) {
        console.log(error)
    }
}

export const modificarDatosSocial = async (id: number, data: ActualizarDatosSocialesProps) => {
    try {
        return await axiosInstance.put(`/datosSocial/${id}`, data)
    } catch (error) {
        console.log(error)
    }
}

export const eliminarDatosSocial = async (id: number) => {
    try {
        return await axiosInstance.delete(`/datosSocial/${id}`)
    } catch (error) {
        console.log(error)
    }
}