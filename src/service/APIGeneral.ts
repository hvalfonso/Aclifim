import axiosInstance from "./axiosInstance";

export const getAllProvincias = async () => {
    try {
       return await axiosInstance.get("/provincias")
    } catch (error) {
        console.log(error)
    }
}

export const getProvincias = async (id: number) => {
    try {
       return await axiosInstance.get(`/provincias/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const getAllMunicipios = async (id: number) => {
    try {
       return await axiosInstance.get(`/municipios/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const getMunicipios = async (id: number) => {
    try {
       return await axiosInstance.get(`/municipio/${id}`)
    } catch (error) {
        console.log(error)
    }
}