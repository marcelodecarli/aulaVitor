
const rl = require("readline-sync")

let tempo1 = rl.question('Digite um valor para tempo em segundos: ')

let horas = Math.floor(tempo1 / 3600)
let minutos = Math.floor((tempo1 % 3600)/60)
let segundos = tempo1 % 60

console.log(`${horas}:${minutos}:${segundos}`)

