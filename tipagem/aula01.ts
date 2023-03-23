//typescript converte para JS

function showTicket(user: string | null, ticket: number) {
    console.log(`Hello ${user ?? 'Usuário padrão'}. Ticket: ${ticket}.`)
}

showTicket(null, 1313)