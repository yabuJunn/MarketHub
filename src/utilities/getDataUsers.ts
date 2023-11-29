export let dataUsers: Array<user | any> = []

export const reiniciarDataUsers = () => {
    dataUsers = []
}

interface user {
    name: string,
    password: string,
    email: string,
    cellphone: string,
    id: string
}