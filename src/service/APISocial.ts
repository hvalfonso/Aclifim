import axiosInstance from "./axiosInstance";

export const getDatosSocial = async (id: number) => {
    try {
       return await axiosInstance.get(`/datosSocial/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const updateDatosSocial = async () => {
    try {
       return await axiosInstance.put(`/datosSocial`)
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