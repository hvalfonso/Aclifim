export interface PDeportivaProps{
    "deporte": string,
    "donde_se_desarrollo": string,
    "id_actividad_deportiva": number,
    "lugar_alcanzado": number
}

export interface PDeportiva {
    "deporte": string,
    "donde_se_desarrollo": string,
    "fecha": string,
    "id": number,
    "id_actividad_deportiva": number,
    "lugar_alcanzado": number
}

export interface ActualizarPDeportivaProps{
    "ID": number,
    "deporte": string,
    "dondeDesarrollo": string,
    "fecha": string,
    "id_actividad_deportiva": number,
    "lugarAlcanzado": number
}

export interface ActualizarPDeportiva{
    "id": number,
    "deporte": string,
    "dondeDesarrollo": string,
    "fecha": string,
    "id_actividad_deportiva": number,
    "lugarAlcanzado": number
}