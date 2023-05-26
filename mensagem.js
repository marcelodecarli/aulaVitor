const rl = require("readline-sync")

let palavraOculta = '';

const frase = rl.question('Digite uma frase: ').split(' ')

for (let i = 0; i < frase.length; i++) {
    const palavra = frase[i] ;
    if (palavra != '') {
        palavraOculta = palavraOculta + palavra[0];
    }

}

console.log(palavraOculta);



