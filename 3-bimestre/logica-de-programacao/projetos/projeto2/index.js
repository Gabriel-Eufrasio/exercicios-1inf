let cliente = "Lucas Almeida"      
      let produto = "Notebook Gamer"
  let  preco = 4500     
      let quantidade = 2
      let valorPago = 9000
      let estoque = 10
      //RF02 — Cálculo do subtotal
      let subtotal = preco*quantidade

      
      let estoqueDisponivel;
      
     if (quantidade<=estoque){
        estoqueDisponivel = "Sim"
             } 
            else{
                estoqueindisponivel = "Não"
                ("estoque indisponivel")
            }
            //
            let descontoPercentual;
            if (subtotal >= 1000) {
                descontoPercentual = 10
            } else {
                descontoPercentual = 0
            }
            //
            let valorDesconto = (subtotal * descontoPercentual) / 100
            //
            let valorFinal = (subtotal-valorDesconto)
            //       
            let pagamentoStatus
            if( valorPago>=valorFinal) {
                pagamentoStatus = "Pagamento aprovado"
             }
            
            else{ pagamentoStatus
                pagamentoinsuficiente = "Pagamento insuficiente"
                "pagamento insuficiente"
            }
            //
              
            let troco;
        if (valorPago >= valorFinal ) {
              troco = valorPago - valorFinal
            
        } else {
             troco = 0
        }
       let statusPedido
        if ( quantidade<=estoque){
            statusPedido = "Pedido disponível para finalização"
 }
     else{
        statusPedido = "pedido não pode ser finalizado por falta de estoque"
    "Pedido não pode finalizado por falta de estoque"
     }
        //Resumo

let resumo = `
    cliente: ${cliente}
    produto: ${produto}
    preco: ${preco}
    quantidade: ${quantidade}
    estoque: ${estoque}
    valorPago: ${valorPago}
    subtotal: ${subtotal}
    estoqueDisponivel: ${estoqueDisponivel}
    descontoPercentual: ${descontoPercentual}
    valorDesconto: ${valorDesconto}
    valorFinal: ${valorFinal}
    pagamentoStatus: ${pagamentoStatus}
    troco: ${troco}
    statusPedido:${statusPedido}
    
    `;

    console.log(resumo)
module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}