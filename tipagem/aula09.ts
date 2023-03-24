//intersecção de tipos

type User = {
    id: number
    name: string
}

type Char = {
    nickname: string
    level: number
}

type PlayerInfo = User & Char; // união de tipos com o &
let info: PlayerInfo = {
    id: 13
    nickname: 'alvescamila'
    level: 10
    name: 'Camila'
}