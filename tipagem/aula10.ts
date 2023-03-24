//interface: não utiliza sinal de igual


interface User {
    id?: number
    name: string
}

let newUser: User = {
    name: "Camila"
}


//interface: possível criar tipagem, utilizando dentro da função

// diferença entre type e interface

type TUser = {
    id: number
    name: string
}

interface IUser {
    id: number
    name: string
}

type TPayment = {
    method: string
}

interface IPayment {
    method: string
}

type TAccount = TUser & TPayment

interface IAccount extends IUser, IPayment;