const prompt = require("prompt-sync")()

const quantidadeDeDias = Number(prompt("Quantidade de dias de dias da semana registrados"))
const metaDiaria = Number(prompt("A meta diária de vendas é"))
const metaSemanal =  Number(prompt("A meta de vendas da semana é"))
//
let totalVendido = 0 
let diasAcimaDaMeta = 0 
let melhorDia = 0
//
for (let dia = 1; dia <= quantidadeDeDias; dia++) {
    const vendaDoDia = Number(prompt(`venda do dia ${dia}`)) 

      totalVendido += vendaDoDia  
if (vendaDoDia >= metaDiaria) {
    diasAcimaDaMeta++ 
}
if(vendaDoDia > melhorDia) {
    melhorDia = vendaDoDia 
}   
}
const mediaVendas = totalVendido / quantidadeDeDias

//
const situacaoSemana = totalVendido >= metaSemanal ? "Meta semanal atingida" : "Meta semanal não atingida" 



const resumo = `
Quantidade de dias: ${quantidadeDeDias}
Meta diária: ${metaDiaria}
Meta semanal: ${metaSemanal}
Total vendido: ${totalVendido}
Média de vendas: ${mediaVendas}
Dias acima da meta: ${diasAcimaDaMeta}
Melhor dia: ${melhorDia}
Situação da semana: ${situacaoSemana}
`
console.log(resumo)

module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}