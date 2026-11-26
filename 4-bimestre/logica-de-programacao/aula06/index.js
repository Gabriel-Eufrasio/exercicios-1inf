const prompt =  require("prompt-sync")()

const turnos = Number(prompt("Quantos turnos"))
let turnosAcimaDaMeta = 0
for (let turno = 1; turno <= turnos; turno++) {
    const peças = Number(prompt(`Peças do turno ${turno}`))
    
    if (peças > 15 ) {
    turnosAcimaDaMeta = turnosAcimaDaMeta + 1
   }
}



console.log(turnosAcimaDaMeta)
module.exports = turnosAcimaDaMeta