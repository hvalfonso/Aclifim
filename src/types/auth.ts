// Require del login
export interface LoginProps {
    "Username": string,
    "password": string
}

// Response del Login
export interface Login {
    "Email": string,
    "RefreshToken": string,
    "RefreshToken_expire_at": string,
    "Username": string,
    "accessToken": string,
    "accessToken_expire_at": string,
    "created_at": string,
    "id": number,
    "municipio": string,
    "provincia": string,
    "session_id": string
}

// Require del loguin
export interface RegisterProps {
    "email": string,
    "municipio": number,
    "password": string,
    "password2": string,
    "provincia": number,
    "username": string
}

// Response del loguin
export interface Register {
    "email": string,
    "id": number,
    "municip": string,
    "provincia": string,
    "username": string
}

// Require del loguin
export interface TokenProps {
    "refresh_token": string
}

// Response del loguin
export interface Token {
    "accessToken": string,
    "accessToken_expire_at": string
}