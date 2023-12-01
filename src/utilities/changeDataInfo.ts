export let changeDataInfo: changeDataInfoType = {
    email: "",
    phone: "",
    identificationDocument: ""
}

export const reiniciarChangeDataInfo = () => {
    changeDataInfo = {
        email: "",
        phone: "",
        identificationDocument: ""
    }
}

interface changeDataInfoType {
    email: string,
    phone: string,
    identificationDocument: string
}