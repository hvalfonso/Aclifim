import { ActividadDeportivaProps, ActualizarADeportivaProps } from "../types/deportiva"
import { ActualizarPDeportivaProps, PDeportivaProps } from "../types/PDeportiva"
import axiosInstance from "./axiosInstances"

export const getActividadDeportiva = async (id: number) => {
    try {
       return await axiosInstance.get(`/actividadDeportiva/${id}`)
    } catch (error) {
        console.log(error)
    }
}

// post de actividad deportiva
export const crearActividadDeportiva = async (data: ActividadDeportivaProps) => {
    try {
       return await axiosInstance.post(`/actividadDeportiva`, data)
    } catch (error) {
        console.log(error)
    }
}


// post de participacion deportiva
export const crearParticipacionDeportiva = async (data: PDeportivaProps) => {
    try {
       return await axiosInstance.post(`/participacionDeportiva`, data)
    } catch (error) {
        console.log(error)
    }
}

// put de actividad deportiva
export const updateActividadDeportiva = async (data: ActualizarADeportivaProps) => {
    try {
       return await axiosInstance.put(`/actividadDeportiva`, data)
    } catch (error) {
        console.log(error)
    }
}

// put de participacion deportiva
export const updateParticipacionDeportiva = async (data: ActualizarPDeportivaProps) => {
    try {
       return await axiosInstance.put(`/participacionDeportiva`, data)
    } catch (error) {
        console.log(error)
    }
}

// delete de actividad deportiva
export const deleteActividadDeportiva = async (id: number) => {
    try {
       return await axiosInstance.delete(`/actividadDeportiva/${id}`)
    } catch (error) {
        console.log(error)
    }
}

// delete de participacion deportiva
export const deleteParticipacionDeportiva = async (id: number) => {
    try {
       return await axiosInstance.delete(`/participacionDeportiva/${id}`)
    } catch (error) {
        console.log(error)
    }
}