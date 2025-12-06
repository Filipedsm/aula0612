// Inserir um console.log para ser o 'título'
// criar 3 variáveis(nome, anoNascimento, anoAtual)
// criar uma função sem parâmetro que calcula idade, usando return
// chamar a função e mostrar o resultado
// -------
console.log("CALCULADORA DE IDADE")

let nome = 'Filipe';
let anoNascimento = 2008;
let anoAtual = 2025;

function idade(){
    return (anoAtual - anoNascimento);
    
}
console.log(`${nome} tem: ${idade()}, anos`);
// criar uma função com parâmetros para fazer o mesmo cálculo de idade de questão acima
// -------
function idade2(anoAtual,anoNascimento){
    return (anoAtual - anoNascimento);
}
console.log('Filipe tem: ' + idade2(2025,2008), 'anos');
// criar uma função com parâmetro e return para mostrar a quantidade de DIAS vividos
// -------
function diasVividos(anoAtual,anoNascimento){
    return (anoAtual - anoNascimento) * 365;
}
console.log('Filipe tem: ' + diasVividos(2025,2008), 'dias vividos');

// criar uma função para verificar se é maior de idade (com if e else)
function maiorIdade(anoAtual,anoNascimento){
    let calculo = anoAtual - anoNascimento;
    if (calculo >= 18){
        return('Você é maior de idade');
    }
    else {
        return('Você não é maior de idade');
    }
}
console.log(maiorIdade(2025,2008));