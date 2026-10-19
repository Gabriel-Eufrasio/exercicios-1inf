const prompt = require("prompt-sync")()
const nomeTurno = prompt('Nome do turno: ');
const meta = Number(prompt('Meta de produção: '));
const producaoInicial = Number(prompt('Produção inicial: '));
const pecasPorCaixa = Number(prompt('Quantidade de itens que cabem em uma caixa: '))



//
let producaoFinal = 0
while (producaoFinal < meta) {
    producaoFinal++
} 
//
let caixasNecessarias = 0
let producao = producaoFinal
do {
   producao -= pecasPorCaixa 
    caixasNecessarias++
} while (producao >  0 ) 
   
 
// 
const situacaoMeta = producao >= meta ? "Meta não atingida" :  "Meta atingida"



const resumo = `
    nomeTurno ${nomeTurno}
    meta ${meta}
    producaoInicial ${producaoInicial}
    pecasPorCaixa ${pecasPorCaixa}
    producaoFinal ${producaoFinal}
    caixasNecessarias ${caixasNecessarias}
    situacaoMeta ${situacaoMeta} 
    
`
console.log(resumo)
module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo,
}