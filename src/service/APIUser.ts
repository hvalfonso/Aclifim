import { PasswordProps } from "../types/users";
import axiosInstance from "./axiosInstance";


export const getAllUsers = async () => {
    try {
       return await axiosInstance.get("/users")
    } catch (error) {
        console.log(error)
    }

}

export const getUser = async (id: number) => {
    try {
        return await axiosInstance.get(`/user/${id}`)
    } catch (error) {
        console.log(error)
    }
}

// EJEMPLO
export const updatePass = async (data: PasswordProps) => {
    try {
        return await axiosInstance.put(`/user/password`, data)
    } catch (error) {
        console.log(error)
    }
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