// criar um programa que valide se a pessoa terá desconto na entrada do cinema. Criar 3 variáveis (idade,estudante,precoIngresso).Fazer condição para dar 50% de desconto caso a condição 'estudante' seja true


let idade = 62
let estudante = true
let precoIngresso = 30

if (estudante === true && idade <18 || idade >60){
    console.log('o valor do seu ingresso é: R$' + precoIngresso / 2, 'com desconto')
} else {
    console.log('O valor do seu ingresso é: R$' + precoIngresso, 'sem desconto')
}

//Calculadora de IMC

let peso = 68
let altura = 1.73
let imc = peso / (altura * altura)

console.log('Seu IMC é: ' + imc.toFixed(2));

if (imc < 18.5){
    console.log('Classificação abaixo do peso')
} else if (imc >= 18.5 && imc <= 24.9){
    console.log('Classificação peso normal')
} else if (imc >= 25 && imc < 29.9){
    console.log('Classificação sobrepeso')
} else {
    console.log('Classificação obesidade')
}