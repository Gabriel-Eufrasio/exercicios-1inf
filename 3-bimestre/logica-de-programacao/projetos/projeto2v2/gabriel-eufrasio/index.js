// Informações do registro
let espectador = "Vinícius Prado"
     let filme = "Aventura Espacial" 
    let preco = 25
  let quantidade = 2
 let assentosDisponiveis = 40
let valorPago = 60
// valor subtotal
let subtotal = preco*quantidade 
// sistemas de asssentos 
let assentoStatus 
if (quantidade<=assentosDisponiveis   ){
    assentoStatus = "Assentos disponíveis"
}
else{
    assentoStatus = "Assentos insuficientes"
    
}

//taxa de conveniencia 
let valorTaxa = 10 
  let   taxaStatus
  if ( subtotal <= 80) {
        taxaStatus = "Taxa de conveniência: R$ 10"
        
    }          else {
      
    taxaStatus = "Sem taxa de conveniência"
    
}
 
   // valor final 
let valorFinal = subtotal + valorTaxa  
 //
    let pagamentoStatus 
        if ( valorPago<=valorFinal) { 
             
                pagamentoStatus = "Pagamento aprovado"
}          else {
    pagamentoStatus = "Pagamento insuficiente"
}

// troco feito
let troco = valorPago - valorFinal;

// status da compra
let statusCompra 

if (assentosDisponiveis) {
    if  (pagamentoStatus)
    statusCompra = "Compra confirmada"
    } else {
    statusCompra ="Compra pendente do pagamento "
       statusCompra = "Compra não pode ser confirmada:assentos insuficientes"
}

let resumo = `
 espectador; ${espectador}
  filme; ${filme}
  preco; ${preco}
  quantidade; ${quantidade}
  assentosDisponiveis; ${assentosDisponiveis}
  valorPago; ${valorPago}
  subtotal; ${subtotal}
  assentoStatus; ${assentoStatus}
  taxaStatus; ${taxaStatus}
  valorTaxa; ${valorTaxa}
  valorFinal; ${valorFinal}
  pagamentoStatus; ${pagamentoStatus}
  troco; ${troco}
  statusCompra; ${statusCompra}
`

console.log(resumo)
module.exports = {
    espectador,
    filme,
    preco,
    quantidade,
    assentosDisponiveis,
   valorPago,
    subtotal,
    assentoStatus,
    taxaStatus,
    valorTaxa,
    valorFinal,
    pagamentoStatus,
    troco,
    statusCompra,
    resumo,
}