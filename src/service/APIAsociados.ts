import axiosInstance from "./axiosInstance";


export const getAllAsociados = async () => {
    try {
       return await axiosInstance.get("/asociados")
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

export const createAsociado = async () => {
    try {
       return await axiosInstance.post(`/asociado`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteAsociado = async (id: number) => {
    try {
       return await axiosInstance.delete(`/asociado/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const updateAsociado = async (id: number) => {
    try {
       return await axiosInstance.put(`/asociado/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const getAsociadoDinamic = async () => {
    try {
       return await axiosInstance.get(`/asociado/dinamic`)
    } catch (error) {
        console.log(error)
    }
}
