export interface ActividadDeportiva {
    "aficcion": Array<String>,
    "asociado_Id": number
}

export interface ActividadDeportivaProps {
    "aficcion_o_practica": Array<String>,
    "id": number,
    "id_asociado": number
}


export interface ActualizarADeportivaProps {
    "ID_Asociado": number,
    "aficcion": string
}

export interface ActualizarADeportiva {
        "aficcion_o_practica": Array <String>,
        "id": 0,
        "id_asociado": 0
}