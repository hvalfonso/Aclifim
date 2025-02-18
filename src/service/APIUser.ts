import { PasswordUserRequest } from "../types/users";
import axiosInstance from "./axiosInstances";


// export const getAllUsers = async () => {
//     try {
//         return await axiosInstance.get("/users")
//     } catch (error) {
//         console.log(error)
//     }

// }

export const getUser = async (id: number) => {
    try {
        return await axiosInstance.get(`/user/${id}`)
    } catch (error) {
        console.log(error)
    }
}

// Endpoint para cambiar contraseña 
export const updatePass = async (data: PasswordUserRequest): Promise<string> => {
    const response = await axiosInstance.put("/user/password", data)
    return response.data
}

export const upgradeUser = async () => {
    try {
        return await axiosInstance.put(`/user/upgrade`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (id: number) => {
    try {
        return await axiosInstance.delete(`/user/${id}`)
    } catch (error) {
        console.log(error)
    }
}