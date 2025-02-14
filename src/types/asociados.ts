// interfaz de crear asociado request
export interface AsociadoProps {
    "Activo": boolean,
    "Apellido1": string,
    "Apellido2": string,
    "Carnet": number,
    "Direccion": string,
    "IDMunicipio": number,
    "NumeroPerteneciente": string,
    "NumeroT": number,
    "Sexo": boolean,
    "name": string,
}

// interfaz de Asociado responses
export interface Asociado{
    "Activo": boolean,
    "Apellido1": string,
    "Apellido2": string,
    "Carnet": number,
    "Direccion": string,
    "id": number,
    "IDMunicipio": number,
    "NumeroPerteneciente": string,
    "NumeroT": number,
    "Sexo": boolean,
    "name": string
}

// interfaz de actualizar asociado request
export interface ActualizarAsociadoProps{
    "Activo": boolean,
    "Apellido1": string,
    "Apellido2": string,
    "Carnet": number,
    "Direccion": string,
    "IDMunicipio": number,
    "NumeroPerteneciente": string,
    "NumeroT": number,
    "Sexo": boolean,
    "id": number,
    "name": string
}

export interface DinamicListParam {
    "page_id": number,
    "page_size": number
}