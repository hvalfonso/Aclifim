import { ActividadCulturalProps, ActualizarACulturalProps } from "../types/cultural"
import { ActualizarPCulturalProps, PCulturalProps } from "../types/Pcultural"
import axiosInstance from "./axiosInstance"

export const getParticipacionCultural = async (id: number) => {
    try {
       return await axiosInstance.get(`/actividadcultural/${id}`)
    } catch (error) {
        console.log(error)
    }
}

// Post de Actividad Cultural
export const crearActividadCultural = async (data: ActividadCulturalProps) => {
    try {
       return await axiosInstance.post(`/ActividadCultural`, data)
    } catch (error) {
        console.log(error)
    }
}

// Post de Participacion Cultural
export const crearParticipacionCultural = async (data: PCulturalProps) => {
    try {
       return await axiosInstance.post(`/ParticipacionCultural`,data)
    } catch (error) {
        console.log(error)
    }
}


// Put de actividadCultural 
export const updateActividadculturala = async (data: ActualizarACulturalProps) => {
    try {
       return await axiosInstance.put(`/actividadcultural`, data)
    } catch (error) {
        console.log(error)
    }
}


// Put de participacion cultural
export const updateParticipacioncultural = async (data: ActualizarPCulturalProps) => {
    try {
       return await axiosInstance.put(`/participacioncultural`,data)
    } catch (error) {
        console.log(error)
    }
}


// delete de actividad cultural
export const deleteActividadcultural = async (id: number) => {
    try {
       return await axiosInstance.delete(`/actividadcultural/${id}`)
    } catch (error) {
        console.log(error)
    }
}


// delete de participacion cultural
export const deleteParticipacioncultural = async (id: number) => {
    try {
       return await axiosInstance.delete(`/participacioncultural/${id}`)
    } catch (error) {
        console.log(error)
    }
}