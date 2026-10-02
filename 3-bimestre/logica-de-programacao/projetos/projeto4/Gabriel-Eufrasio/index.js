let cliente = "Gustavo Pires"
     let opcaoMenu = 4
     let quantidade = 4
    let formaPagamento = "pix"
     let statusPedido = "pendente" 
    //
    let prato
       switch (opcaoMenu) {
           case "1 - Açaí 300ml":
               break;
               case "2 - Açaí 500ml ":
                   break;
                   
                   case "3 - Vitamina":      
                   break;
                   
                   case "4 - Tapioca " :
                       prato = "Opção invalida" 
                       
                break;
                
                    default:
            prato = "Tapioca"
        break;
    }
    //
    let precoUnitario 
     switch (opcaoMenu) {
        case 1:
                precoUnitario = 14
            break;
     
            case 2:
        precoUnitario = 20 
            break;
        case 3:
            precoUnitario = 12
    case 4 : 
        precoUnitario = 0
        default:
        precoUnitario = 10    
        break;
     }
//
let subtotal = precoUnitario * quantidade
    //
    let freteStatus =  subtotal>=60  ? " Frete grátis" : "Frete pago"
    let frete = subtotal>=60 ? 0 : 15
    //      
     let pagamentoMensagem 
    switch (formaPagamento) {
            case "Pix":
             pagamentoMensagem = "Forma de pagamento inválida"   
            break;
         
            default:
                pagamentoMensagem = "Pagamento via PIX"   
            break;
         }
         //descontoPercentual
         let descontoPercentual
         switch (descontoPercentual) {
            case descontoPercentual:
                descontoPercentual = 5
                break;
        

         break;
            default:
               descontoPercentual = 0
            break;
         }
// total
         let desconto = subtotal * descontoPercentual /100
         let total = subtotal - desconto + frete
            let statusMensagem
            switch (statusPedido) {
                case statusMensagem:
                    statusMensagem = "Status cancelado"
                    break;
            
                default:
                statusMensagem = "Aguardando pagamento"    
                break;
            }




let resumo= ` 
    cliente : ${cliente} 
    opcaoMenu: ${opcaoMenu} 
    quantidade: ${quantidade} 
    formaPagamento: ${formaPagamento} 
    statusPedido: ${statusPedido} 
    prato: ${prato} 
    precoUnitario: ${precoUnitario} 
    subtotal: ${subtotal} 
    freteStatus: ${freteStatus} 
    frete: ${frete} 
    pagamentoMensagem: ${pagamentoMensagem} 
    descontoPercentual: ${descontoPercentual} 
    desconto: ${desconto} 
    total: ${total} 
    statusMensagem: ${statusMensagem} 
    
`
console.log(resumo)


module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}