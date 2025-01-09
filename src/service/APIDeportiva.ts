import axiosInstance from "./axiosInstance"

export const getActividadDeportiva = async (id: number) => {
    try {
       return await axiosInstance.get(`/actividadDeportiva/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const crearActividadDeportiva = async () => {
    try {
       return await axiosInstance.post(`/actividadDeportiva`)
    } catch (error) {
        console.log(error)
    }
}

export const crearParticipacionDeportiva = async () => {
    try {
       return await axiosInstance.post(`/participacionDeportiva`)
    } catch (error) {
        console.log(error)
    }
}

export const updateActividadDeportiva = async () => {
    try {
       return await axiosInstance.put(`/actividadDeportiva`)
    } catch (error) {
        console.log(error)
    }
}

export const updateParticipacionDeportiva = async () => {
    try {
       return await axiosInstance.put(`/participacionDeportiva`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteActividadDeportiva = async (id: number) => {
    try {
       return await axiosInstance.delete(`/actividadDeportiva/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteParticipacionDeportiva = async (id: number) => {
    try {
       return await axiosInstance.delete(`/participacionDeportiva/${id}`)
    } catch (error) {
        console.log(error)
    }
}