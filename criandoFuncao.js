// Criar uma função de boas vindas(sem parâmetro) com dois consoles e frases
//chamar a função

//2 - //criar uma função com dois parâmetros.
// dentro da função criar uma variável para calcular a soma de dois números e um console mostrando o resultado
//chame a função para mostrar vários resultados diferentes

function boasVindas (){
    console.log('mensagem1');
    console.log('mensagem2');
}
 boasVindas("Olá senhor", "Seja bem-vindo");

 function soma(n1,n2){

    let somatoria = (n1 + n2);
    console.log(`a soma de ${n1} + ${n2} é ${somatoria}`);
 }

 soma(1,2);

 function dobroValor(numero){
    let dobro = (numero * 2)
    return dobro
 }
 let resultado = dobroValor(2)


 console.log(resultado)