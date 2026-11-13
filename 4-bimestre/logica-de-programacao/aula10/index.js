const prompt = require("prompt-sync")()
const produto = {
    nome: prompt(" Nome do produto "),
    preco: Number(prompt("Preço")),
    estoque: Number(prompt("Estoque"))
}
console.log(produto)

const aumento  = Number(prompt("Aumento do preco"))
produto.preco = aumento + produto.preco
console.log(produto.preco)
module.exports = produto