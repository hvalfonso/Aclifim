import axiosInstance from "./axiosInstance"

export const getActividadEducativa = async (id: number) => {
    try {
       return await axiosInstance.get(`/actividadEducativa/${id}`)
    } catch (error) {
        console.log(error)
    }
}
export const crearActividadEducativa = async () => {
    try {
       return await axiosInstance.post(`/actividadEducativa`)
    } catch (error) {
        console.log(error)
    }
}

export const crearEstudiosActuales = async () => {
    try {
       return await axiosInstance.post(`/estudiosActuales`)
    } catch (error) {
        console.log(error)
    }
}

export const updateActividadEducativa = async () => {
    try {
       return await axiosInstance.put(`/actividadEducativa`)
    } catch (error) {
        console.log(error)
    }
}

export const updateEstudiosActuales = async () => {
    try {
       return await axiosInstance.put(`/estudiosActuales`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteActividadEducativa = async (id: number) => {
    try {
       return await axiosInstance.delete(`/actividadEducativa/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteEstudiosActuales = async (id: number) => {
    try {
       return await axiosInstance.delete(`/estudiosActuales/${id}`)
    } catch (error) {
        console.log(error)
    }
}