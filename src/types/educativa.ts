// peticion al crear la actividad educativa
export interface ActividadEducativaProps {
    "id_asociado": number,
    "id_estudios_actuales": number,
    "ultimo_grado_aprobado": string
}

// Respuesta al crear la actividad educativa
export interface ActividadEducativa {
    "id": number,
    "id_asociado": number,
    "id_estudios_actuales": number,
    "ultimo_grado_aprobado": string
}

// peticion al actualizar la actividad educativa
export interface ActualizarActividadEducativaProps {
    "id": number,
    "ultimo_grado_aprobado": string
}

// Respuesta al actualizar la actividad educativa
export interface ActualizarEstudiosEducativa {
    "id": number,
    "id_asociado": number,
    "id_estudios_actuales": number,
    "ultimo_grado_aprobado": string
}
