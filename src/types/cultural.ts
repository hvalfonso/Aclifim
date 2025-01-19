export interface ActividadCulturalProps {
    "asociado_Id": number,
    "especialidad": Array<String>
}

export interface ActividadCultural {
    "especialidad": Array<String>,
    "id": number,
    "id_asociado": number
}


export interface ActualizarACulturalProps {
    "aficcion": string,
    "id": number
}


export interface ActualizarACultural {
    "aficcion": Array<String>,
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
