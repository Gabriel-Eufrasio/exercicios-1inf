const prompt = require("prompt-sync")()

const precoUnitario =  Number(prompt("Digite o preço unitario do produto:"))
const quantidade = Number(prompt("Digite a quantidade de produtos:"))
const formaPagamento = prompt("Digite a forma de pagamento: ")
//
const calcularSubtotal = (precoUnitario, quantidade) => {
    return precoUnitario * quantidade
}

//

const calcularFrete = (subtotal) => {
    if (subtotal >= 100) {
        return 0
    } else {
        return 10
    }
}


//

const calcularDesconto = (subtotal, formaPagamento) => {
    let percentual = 0 
    switch (formaPagamento) {
        case "dinheiro":
            case "pix":
                percentual = 5

                return (subtotal * percentual) /100
                case "cartao":
                  percentual = 0

                  break                 
                  default:
                 percentual = 5
                }

                return (subtotal * percentual) / 100

                } 
const calcularTotal = (precoUnitario, quantidade, formaPagamento) => {
    const subtotal = calcularSubtotal(precoUnitario, quantidade)
    const frete = calcularFrete(subtotal)
    const desconto = calcularDesconto(subtotal, formaPagamento)
    return subtotal + frete - desconto
}


//

    const subtotal = calcularSubtotal(precoUnitario, quantidade)
    const frete = calcularFrete(subtotal)
    const desconto = calcularDesconto(subtotal, formaPagamento)
    const total = calcularTotal(precoUnitario, quantidade, formaPagamento)

console.log(calcularTotal(precoUnitario, quantidade, formaPagamento))
//
const resumo = `
    precoUnitario: ${precoUnitario}
    quantidade: ${quantidade}
    formaPagamento: ${formaPagamento}
    calcularSubtotal: ${calcularSubtotal}
    calcularFrete: ${calcularFrete}
    calcularDesconto: ${calcularDesconto}
    calcularTotal: ${calcularTotal}
    subtotal: ${subtotal}
    frete: ${frete}
    desconto: ${desconto}
    total: ${total}
   
`
console.log(resumo)






module.exports = {
    precoUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}