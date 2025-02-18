// Peticion para crear la actividad cultural
export interface CreateActividadCulturalRequest {
    "asociado_Id": number,
    "especialidad": string []
}

// Respuesta al crear la actividad cultural
export interface ActividadCulturalResponse {
    "especialidad": string [],
    "id": number,
    "id_asociado": number
}

// Tipo extendido para el frontend
export interface ActividadCulturalLocal extends ActividadCulturalResponse {
    completado: boolean;
  }

// Peticion para actualizar la actividad cultural
export interface ActualizarActividadCulturalRequest {
    "aficcion": string,
    "id": number
}

// Respuesta al actualizar la actividad cultural
export interface ActualizarActividadCulturalResponse {
    "aficcion": string [],
    "id_asociado": number,
    "participacion":{
            "donde_se_desarrollo": string,
            "especialidad": string,
            "fecha": string,
            "id": number,
            "id_actividad_cultural": number,
            "lugar_alcanzado": number
        } []
}
