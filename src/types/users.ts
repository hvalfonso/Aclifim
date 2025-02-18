
// actualizar password user request
export interface PasswordUserRequest {
    "id": number,
    currentPassword?: string;
    "password": string,
    "password2": string
}

// actualizar hace que un usuario se vuelva a super usuario
export interface UpgradeRequest {
    "id": number,
    "valid": boolean
}

// obtiene un usuario por su id response
export interface Getuser {
        "created_at": string;
        "email": string;
        "municipio": string;
        "provincia": string;
        "username": string
}

// Obtiene a muchos usuarios response 
export interface GetUsers {
    "user": {
        "created_at": string,
        "email": string,
        "municipio": string,
        "provincia": string,
        "username": string
    } []
}

