const rl = require("readline-sync")

horasViajadas = rl.question('Quantas horas viajadas: ')
velocidadeMedia = rl.question('Velocidade média da viagem: ')

let kmTotal = horasViajadas * velocidadeMedia
console.log(`${(kmTotal/12).toFixed(3)} Litros gastos.`)