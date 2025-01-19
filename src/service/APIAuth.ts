import { LoginProps, RegisterProps, TokenProps } from "../types/auth";
import axiosInstance from "./axiosInstance";


// Para el post de login 
export const login = async (data: LoginProps ) => {
    try {
        return await axiosInstance.post(`/login`, data)
    } catch (error) {
        console.log(error)
    }
}



// Para el post de register
export const register = async (data: RegisterProps ) => {
    try {
        return await axiosInstance.post(`/register`, data)
    } catch (error) {
        console.log(error)
    }
}



// Para el post de token
export const token = async (data: TokenProps ) => {
    try {
        return await axiosInstance.post(`/token`, data)
    } catch (error) {
        console.log(error)
    }
}