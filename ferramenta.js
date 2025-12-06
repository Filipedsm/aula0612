// 1 - Função para calcular área de um quadrado
// 2 - Função para calcular área de um retângulo
// 3 - Função para converter Celsius em Fahrenheit
// 4 - Função para formatar preço com duas casas decimais

// todas com return e console da função

// calculo da área de um quadrado
function areaQuadrado(lado){
    let area = lado * lado;
    return area;
}
let lado = 5;
let resultado = areaQuadrado(lado);
console.log(`A área de um quadrado com lados medindo ${lado}cm é igual a ${resultado}cm`);

// Calculo da área de um retangulo
function areaRetangulo(base,altura){
    let area = base * altura;
    return area;
}
let altura = 4;
let base = 4;
let resultado1 = areaRetangulo(base,altura);
console.log(`A área de um retangulo com ${base}cm de base e ${altura}cm de altura é ${resultado1}cm`);

// Celsius para Fahrenheit
function CelsiusFahrenheit(Celsius){
    let Fahrenheit = (Celsius * 1,8) + 32;
    return Fahrenheit;
}
let Celsius = 28
let resultado2 = CelsiusFahrenheit(Celsius);
console.log(`${Celsius}° Celsius é igual ${resultado2}° Fahrenheit`);

// formatação de preços com duas casas decimais

function formatacaoDecimal(valor){
    return 'R$' + valor.toFixed(2);
}
let resultado3 = formatacaoDecimal(12.50);
console.log(`Número em reais é ${resultado3}`);
