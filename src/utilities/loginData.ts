export let loginData: loginDataType = {
    email: "",
    password: ""
}

export const reiniciarloginData = () => {
    loginData = {
        email: "",
        password: ""
    }
}

interface loginDataType {
    email: string,
    password: string
}