interface PostLogin {
    "Username": string,
    "password": string
}

interface PostRegister {
    "email": string,
    "municipio": number,
    "password": string,
    "password2": string,
    "provincia": number,
    "username": string
}

interface PostToken {
    "refresh_token": string
}