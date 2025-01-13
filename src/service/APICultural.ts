import axiosInstance from "./axiosInstance"

export const getParticipacionCultural = async (id: number) => {
    try {
       return await axiosInstance.get(`/ActividadCultural/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const crearActividadCultural = async () => {
    try {
       return await axiosInstance.post(`/ActividadCultural`)
    } catch (error) {
        console.log(error)
    }
}

export const crearParticipacionCultural = async () => {
    try {
       return await axiosInstance.post(`/ParticipacionCultural`)
    } catch (error) {
        console.log(error)
    }
}

export const updateActividadculturala = async () => {
    try {
       return await axiosInstance.put(`/actividadcultural`)
    } catch (error) {
        console.log(error)
    }
}

export const updateParticipacioncultural = async () => {
    try {
       return await axiosInstance.put(`/participacioncultural`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteActividadcultural = async (id: number) => {
    try {
       return await axiosInstance.delete(`/actividadcultural/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteParticipacioncultural = async (id: number) => {
    try {
       return await axiosInstance.delete(`/participacioncultural/${id}`)
    } catch (error) {
        console.log(error)
    }
}