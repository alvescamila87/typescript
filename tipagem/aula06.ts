//operador de número do ts atrav´s do pipe "|"

function printUserId(id: number | string ) {
    console.log(`O ID do usuário é: ${id}`)
}

printUserId('101');


// generics: deixar a tipagem flexível, uma vez declarado, tem que usar aquela tipagem declarada
/*

<T>

    - S => state
    - T => type
    - K => key
    - V => value
    - E => element

*/

function useState<T extends number | string>() {
    let state: T

    function get() {
        return state
    }

    function set(newValue: T) {
        state = newValue
    }

    return { get, set }
}

let newState = useState<string>()
newState.get()
newState.set('Camila')
newState.set(123)