// Peticion para crear la actividad deportiva
export interface ActividadDeportiva {
    "aficcion": Array<String>,
    "asociado_Id": number
}

// Respuesta al crear la actividad deportiva
export interface ActividadDeportivaProps {
    "aficcion_o_practica": Array<String>,
    "id": number,
    "id_asociado": number
}

// Peticion para actualizar la actividad deportiva
export interface ActualizarADeportivaProps {
    "ID_Asociado": number,
    "aficcion": string
}

// Respuesta al actualizar la actividad deportiva
export interface ActualizarADeportiva {
        "aficcion_o_practica": Array <String>,
        "id": 0,
        "id_asociado": 0
}