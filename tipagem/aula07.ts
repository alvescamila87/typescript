//type: define num único lugar e referencia nos demais
// criação de tipo sempre com letra maiúscula

type IdType = number | string | undefined

let userID: IdType
let adminID: IdType

userID = false


//type assertions: define num único lugar e referencia nos demais

type UserResponse = {
    ui: number
    name: string
    avatar: string
}

let userResponse = {} as UserResponse;
userResponse.name

