interface PostActividadCultural {
    "asociado_Id": number,
    "especialidad": Array<String>
}

interface PostActividadDeportiva {
    "aficcion": Array<String>,
    "asociado_Id": number
}

interface PostActividadEducativa {
    "id_asociado": number,
    "id_estudios_actuales": number,
    "ultimo_grado_aprobado": string
}