
// este es el put de user/password.
export interface PasswordProps {
    "id": number,
    "password": string,
    "password2": string
}

// este es el put de user/upgrade 
export interface UpgradeProps {
    "id": number,
    "valid": boolean
}

// este es el get/users get many users 

export interface Getusers {
        "created_at": string;
        "email": string;
        "municipio": string;
        "provincia": string;
        "username": string
}