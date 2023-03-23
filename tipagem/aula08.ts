//type para objects

type Point = {
    x: number
    y: number
}

function printCoord( point: Point) {
    console.log(`O meu eixo x é: ${point.x}`)
    console.log(`O meu eixo x é: ${point.y}`)
}

printCoord({x: 101, y: 50})

type User = {
    name: string
    email: string
    age: number
    isAdmin: boolean
}

const newUser: User;
newUser.name
newUser.age
