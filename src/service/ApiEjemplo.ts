import { Asociado, AsociadoProps } from "../types/asociados";
import axiosInstanceEjemplo from "./axiosEjemplo";

// Obtener todos los asociados
export const getAsociado = async (): Promise<Asociado[]> => {
    const response = await axiosInstanceEjemplo.get("/asociado");
    return response.data;
};

// Crear un nuevo asociado
export const createAsociado = async (asociadoData: AsociadoProps): Promise<AsociadoProps> => {
    const response = await axiosInstanceEjemplo.post("/asociado", asociadoData);
    return response.data;
};

// // Actualizar un asociado existente
// export const updateAsociado = async (id: number, asociadoData: ActualizarAsociadoProps): Promise<AsociadoProps> => {
//     const response = await axiosInstanceEjemplo.put(`/asociado/${id}`, asociadoData);
//     return response.data;
// };

// // Eliminar un asociado
// export const deleteAsociado = async (id: number): Promise<void> => {
//     await axiosInstanceEjemplo.delete(`/asociado/${id}`);
// };

