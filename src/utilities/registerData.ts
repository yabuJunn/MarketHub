export let registerData: registerDataType = {
    name: "",
    lastName: "",
    email: "",
    cellphone: "",
    password: "",
    confirmPassword: ""
}

export const reiniciarRegisterData = () => {
    registerData = {
        name: "",
        lastName: "",
        email: "",
        cellphone: "",
        password: "",
        confirmPassword: ""
    }
}

interface registerDataType {
    name: string,
    lastName: string,
    email: string,
    cellphone: string,
    password: string,
    confirmPassword: string
}