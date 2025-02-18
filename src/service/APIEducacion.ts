import { ActividadEducativaProps, ActualizarActividadEducativaProps } from "../types/educativa"
import { ActEstudiosActualesProps, EstudiosActualesProps } from "../types/estudiosactuales"
import axiosInstance from "./axiosInstances"

export const getActividadEducativa = async (id: number) => {
    try {
       return await axiosInstance.get(`/ActividadEducativa/${id}`)
    } catch (error) {
        console.log(error)
    }
}

// post de act educativa
export const crearActividadEducativa = async (data: ActividadEducativaProps) => {
    try {
       return await axiosInstance.post(`/ActividadEducativa`, data)
    } catch (error) {
        console.log(error)
    }
}

// post de estudios actuales 
export const crearEstudiosActuales = async (data: EstudiosActualesProps) => {
    try {
       return await axiosInstance.post(`/EstudiosActuales`, data)
    } catch (error) {
        console.log(error)
    }
}


// actualizar de actividades educativa
export const updateActividadEducativa = async (data: ActualizarActividadEducativaProps) => {
    try {
       return await axiosInstance.put(`/ActividadEducativa`, data)
    } catch (error) {
        console.log(error)
    }
}

// actualizar participacion estudios actuales 
export const updateEstudiosActuales = async (data: ActEstudiosActualesProps) => {
    try {
       return await axiosInstance.put(`/EstudiosActuales`, data)
    } catch (error) {
        console.log(error)
    }
}


// delete actividad educativa
export const deleteActividadEducativa = async (id: number) => {
    try {
       return await axiosInstance.delete(`/ActividadEducativa/${id}`)
    } catch (error) {
        console.log(error)
    }
}


// delete estudios actuales
export const deleteEstudiosActuales = async (id: number) => {
    try {
       return await axiosInstance.delete(`/EstudiosActuales/${id}`)
    } catch (error) {
        console.log(error)
    }
}