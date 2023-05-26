const rl = require("readline-sync")

let golsGremio
let golsInter
let tabela = []
let jogos = []
let vitoriasGremio = []
let vitoriasInter = []


while (true) {
    console.clear()

golsGremio = rl.questionInt('Quantos gols o Gremio fez: ')
golsInter = rl.questionInt('Quantos gols o Inter fez: ')

function gols() {
    if(golsGremio > golsInter){
    console.log(`
    Vencedor: Gremio
    Placar: ${golsGremio} x ${golsInter}
    `)
    vitoriasGremio.push()
    jogos.push(1)
    }else if (golsGremio<golsInter) {
        console.log(`
        Vencedor: Inter
        Placar: ${golsInter} x ${golsGremio}
        `)
        
    }else{
        console.log('Empate')
    }
console.log(vitoriasGremio)
}
gols()

let continuar = parseInt(rl.questionInt(
    `
    NOVO GRENAL:
    1: SIM
    2: NAO
    `
))
    if (continuar == 1) {
    }else if(continuar == 2){
        process.exit(0)
    }else{
        console.log('opcao invalida!')
        rl.question('Pressione ENTER para continuar...')    

    }
}