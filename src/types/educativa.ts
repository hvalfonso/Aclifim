export interface ActividadEducativaProps {
    "id_asociado": number,
    "id_estudios_actuales": number,
    "ultimo_grado_aprobado": string
}


export interface ActividadEducativa {
    "id": number,
    "id_asociado": number,
    "id_estudios_actuales": number,
    "ultimo_grado_aprobado": string
}


export interface ActualizarActividadEducativaProps {
    "id": number,
    "ultimo_grado_aprobado": string
}

export interface ActualizarEstudiosEducativa {
    "id": number,
    "id_asociado": number,
    "id_estudios_actuales": number,
    "ultimo_grado_aprobado": string
}
