
// Participacion Cultural
export interface CreateParticipacionCulturalRequest{
    "donde_se_desarrollo": string,
    "e_specialidad": string,
    "fecha": string,
    "id_actividad_cultural": number,
    "lugar_alcanzado": number
}

export interface CreateParticipacionCulturalResponse {
    "donde_se_desarrollo": string,
    "especialidad": string,
    "fecha": string,
    "id": number,
    "id_actividad_cultural": number,
    "lugar_alcanzado": number
}


export interface ActualizarParticipacionCulturalRequest{
    "donde_se_desarrollo": string,
    "e_specialidad": string,
    "fecha": string,
    "id": number,
    "lugar_alcanzado": number
}

export interface ActualizarParticipacionCulturalResponse {
    "donde_se_desarrollo": string,
    "especialidad": string,
    "fecha": string,
    "id": number,
    "id_actividad_cultural": number,
    "lugar_alcanzado": number
}



// Participacion Cultural
export interface CreateParticipacionCulturalRequest{
    "donde_se_desarrollo": string,
    "e_specialidad": string,
    "fecha": string,
    "id_actividad_cultural": number,
    "lugar_alcanzado": number
}

export interface CreateParticipacionCulturalResponse {
    "donde_se_desarrollo": string,
    "especialidad": string,
    "fecha": string,
    "id": number,
    "id_actividad_cultural": number,
    "lugar_alcanzado": number
}


export interface ActualizarParticipacionCulturalRequest{
    "donde_se_desarrollo": string,
    "e_specialidad": string,
    "fecha": string,
    "id": number,
    "lugar_alcanzado": number
}

export interface ActualizarParticipacionCulturalResponse {
    "donde_se_desarrollo": string,
    "especialidad": string,
    "fecha": string,
    "id": number,
    "id_actividad_cultural": number,
    "lugar_alcanzado": number
}


//////////////////////////////////
// Actividad Cultural
export interface CreateActividadCulturalRequest {
    "asociado_Id": number,
    "especialidad": string []
}

export interface ActividadCulturalResponse {
    "especialidad": string [],
    "id": number,
    "id_asociado": number
}

// Peticion para actualizar la actividad cultural
export interface ActualizarActividadCulturalRequest {
    "aficcion": string, // la peticion envia un string
    "id": number
}

