export let registerData: registerDataType = {
    name: "",
    userID: "",
    email: "",
    cellphone: "",
    password: "",
    confirmPassword: "",
    identificationDocument: ""
}

export const reiniciarRegisterData = () => {
    registerData = {
        name: "",
        userID: "",
        email: "",
        cellphone: "",
        password: "",
        confirmPassword: "",
        identificationDocument: ""
    }
}

interface registerDataType {
    name: string,
    userID: string,
    email: string,
    cellphone: string,
    password: string,
    confirmPassword: string,
    identificationDocument: string
}