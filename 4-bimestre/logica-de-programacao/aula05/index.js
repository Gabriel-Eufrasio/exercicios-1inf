const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias? "))
let totalProduzido = 0

for (let dia  = 1 ; dia <= dias; dia++) {
    const produacao = Number(prompt(`Produçao do dia ${dia}`)) 
    totalProduzido = totalProduzido + produacao
}

module.exports = totalProduzido