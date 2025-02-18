// interfaz de crear datos sociales request
export interface DatosSocialesProps {
    "estadoCivil": string,
    "id": number,
    "integracionRevolucionaria": string,
    "occupacion": string
}

// interfaz de crear datos sociales responses
export interface DatosSociales {
    "estado_civil": string,
    "id": number,
    "id_asociado": number,
    "integracion_revolucionaria": string,
    "ocupacion": string
}
// interfaz de actualizar datos sociales request
export interface ActualizarDatosSocialesProps {
    "estadocivil": string,
    "id": number,
    "integracionRevolucionaria": string,
    "occupacion": string
}

// interfaz de actualizar datos sociales responses
export interface ActualizarDatosSociales{
    "estadocivil": string,
    "id": number,
    "id_asociado": number,
    "integracionRevolucionaria": string,
    "ocupacion": string
}