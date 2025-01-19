import { ActualizarAsociadoProps, AsociadoProps } from "../types/asociados";
import axiosInstance from "./axiosInstance";


export const getAllAsociados = async () => {
    try {
        return await axiosInstance.get("/asociado")
    } catch (error) {
        console.log(error)
    }
}

export const getAsociado = async (id: number) => {
    try {
        return await axiosInstance.get(`/asociado/${id}`)
    } catch (error) {
        console.log(error)
    }
}


// Para el post 
export const createAsociado = async (data: AsociadoProps ) => {
    try {
        return await axiosInstance.post(`/asociado`, data)
    } catch (error) {
        console.log(error)
    }
}


// Para el delete
export const deleteAsociado = async (id: number) => {
    try {
        return await axiosInstance.delete(`/asociado/${id}`)
    } catch (error) {
        console.log(error)
    }
}


// Para el put tiene props 
export const updateAsociado = async (data: ActualizarAsociadoProps) => {
    try {
        return await axiosInstance.put(`/asociado/${data}`)
    } catch (error) {
        console.log(error)
    }
}


// Aqui estaba getAsociadoDinamic y en el swagger sale como Post
export const getAsociadoDinamic = async () => {
    try {
        return await axiosInstance.get(`/asociado/dinamic`)
    } catch (error) {
        console.log(error)
    }
}
