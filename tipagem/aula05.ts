//função sem retorno é uma função do tipo 'void'

function showMessages(message: string): void {
    return message
}

// o void é inferido automaticamente quando a função não tem retorno
function showMessages(message: string) {
    console.log(message)
}

// declarar o tipo do retorno, se é booleano, string, number

function showMessages(message: string):number {
    return 10
}

console.log(showMessages('oi'))
