// src/service/APIGeneral.ts
import axiosInstance from "./axiosInstances";
import { Provincia, Municipio } from "../types/general";

// Obtiene TODAS las provincias
export async function getProvincias() {
  // GET /provincias → array de { id, name }
  return axiosInstance.get<Provincia[]>("/provincias");
}

// Obtiene múltiples municipios de la provincia con id
export async function getMunicipios(id: number) {
  // Asegúrate de que la ruta /municipios/:id retorne un array
  // Ej: [ { "id": 10, "id_provincia": 1, "name": "Viñales" }, ... ]
  return axiosInstance.get<Municipio[]>(`/municipios/${id}`);
}
