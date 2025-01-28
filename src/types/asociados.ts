export interface AsociadoProps {
    "Activo": boolean,
    "Apellido": string,
    "Carnet": number,
    "Direccion": string,
    "IDMunicipio": number,
    "NumeroPerteneciente": string,
    "NumeroT": number,
    "Sexo": boolean,
    "name": string
}


export interface Asociado{
    "Activo": boolean,
    "Apellido": string,
    "Carnet": number,
    "Direccion": string,
    "ID": number,
    "IDMunicipio": number,
    "NumeroPerteneciente": string,
    "NumeroT": number,
    "Sexo": boolean,
    "name": string
}


export interface ActualizarAsociadoProps{
    "Activo": boolean,
    "Apellido": string,
    "Carnet": number,
    "Direccion": string,
    "IDMunicipio": number,
    "NumeroPerteneciente": string,
    "NumeroT": number,
    "Sexo": boolean,
    "id": number,
    "name": string
}