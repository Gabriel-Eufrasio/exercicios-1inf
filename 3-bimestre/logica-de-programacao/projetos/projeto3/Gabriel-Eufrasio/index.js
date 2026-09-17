  let nome = "Gabriel Eufrásio"
    let idade = 20
let tipoCredencial = "comum"
let possuiConvite = true
let bloqueado =  false
let valorEntrada = 20
let valorPago = 20
//
let idadeStatus;
if (idade>=18){
        idadeStatus = "Idade permitida" 
             } 
            else{
                idadeStatus = "Não permitida"
                "idade não permitida"
            }
//
            let nivelAcesso;
                if (tipoCredencial === "expositor" || "organizador"){
        nivelAcesso = "Acesso comum"
             } 
            else{
                nivelAcesso = "Acesso administrativo liberado"
                
            }
          //  
            let acessoStatus;
            if (idade>=18 && possuiConvite === true && !bloqueado){
        acessoStatus = "Entrada liberada"
             } 
            else{
                acessoStatus = "Entrada negada"
                ("Entrada negada")
            }
        //
             let pagamentoSatus
        if (valorPago >= valorEntrada){
          pagamentoStatus = "Pagamento aprovado"
          troco = valorPago- valorEntrada
          
        } 
        else{
                pagamentoSatus = "Pagamento insuficiente"
                "pagamento insuficiente"
             troco = 0
            }
            //
                // 
                let statusFeira;
                if ( acessoStatus && pagamentoStatus)
                {  statusFeira = "Check-in da feira confirmado"         
        }
                else {
                    checkinegado = "Check-in da feira não confirmado"
                }

    let resumo = `
        nome: ${nome}
        idade: ${idade}
        tipoCredencial: ${tipoCredencial}
        possuiConvite: ${possuiConvite}
        bloqueado: ${bloqueado}
        valorEntrada: ${valorEntrada}
        valorPago: ${valorPago}
        idadeStatus: ${idadeStatus}
        nivelAcesso: ${nivelAcesso}
        acessoStatus: ${acessoStatus}
        pagamentoStatus: ${pagamentoStatus}
        troco: ${troco}
        statusFeira: ${statusFeira}  
        `

        console.log(resumo)


    module.exports = {
    nome,
    idade,
    tipoCredencial,
    possuiConvite,
    bloqueado,
    valorEntrada,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusFeira,
    resumo
}