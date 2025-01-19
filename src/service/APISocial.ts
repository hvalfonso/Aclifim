import { ActualizarDatosSocialesProps, DatosSocialesProps } from "../types/sociales";
import axiosInstance from "./axiosInstance";

export const getDatosSocial = async (id: number) => {
    try {
        return await axiosInstance.get(`/datosSocial/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const postDatosSocial = async (data: DatosSocialesProps) => {
    try {
        return await axiosInstance.put(`/datosSocial`, data)
    } catch (error) {
        console.log(error)
    }
}

export const updateDatosSocial = async (data: ActualizarDatosSocialesProps) => {
    try {
        return await axiosInstance.put(`/datosSocial`, data)
    } catch (error) {
        console.log(error)
    }
}

export const deleteDatosSocial = async () => {
    try {
        return await axiosInstance.delete(`/datosSocial`)
    } catch (error) {
        console.log(error)
    }
}