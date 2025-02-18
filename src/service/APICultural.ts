// src/service/ApiCultural.ts;
import { CreateActividadCulturalRequest, ActividadCulturalResponse, ActualizarActividadCulturalRequest, ActualizarActividadCulturalResponse } from "../types/cultural";
import axiosInstances from "./axiosInstances";

/**
 * Crea una actividad cultural.
 * Endpoint: POST /ActividadCultural
 */
export const createActividadCultural = async (data: CreateActividadCulturalRequest): Promise<ActividadCulturalResponse> => {
  const response = await axiosInstances.post<ActividadCulturalResponse>("/ActividadCultural", data);
  return response.data;
};

/**
 * Actualiza una actividad cultural.
 * Endpoint: PUT /actividadcultural
 */
export const updateActividadCultural = async (data: ActualizarActividadCulturalRequest ): Promise<ActualizarActividadCulturalResponse> => {
  const response = await axiosInstances.put<ActualizarActividadCulturalResponse>("/actividadcultural", data);
  return response.data;
};

/**
 * Obtiene una actividad cultural por ID.
 * Endpoint: GET /actividadcultural/{id}
 */
export const getActividadCulturalById = async (id: number): Promise<ActividadCulturalResponse> => {
  const response = await axiosInstances.get<ActividadCulturalResponse>(`/actividadcultural/${id}`);
  return response.data;
};

/**
 * Elimina una actividad cultural.
 * Endpoint: DELETE /actividadcultural/{id}
 */
export const deleteActividadCultural = async ( id: number): Promise<ActividadCulturalResponse> => {
  const response = await axiosInstances.delete<ActividadCulturalResponse>(`/actividadcultural/${id}`);
  return response.data;
};
