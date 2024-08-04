//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularImc(altura,peso){
    const imc = peso/(altura*altura);
    return imc;
};

console.log(`Su indice de masa corporal es ${calcularImc(1.70,81.7)}`);

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
const numero = 5;

function calcularFactorial(numero){
    let resultado = numero;
    let i = numero;

    while(i != 1){
        resultado = resultado * (i-1);
        i--;
    }
    return resultado;
};

console.log(`el factorial de ${numero} es igual a ${calcularFactorial(numero)}`);

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

const dolar = 50;

// function dolarAReal(dolar){
//     const real = 4.60;
//     return dolar * real; 
// };

// console.log(`${dolar} ${dolar === 1 ? 'dolar americano' : 'dolares americanos'} es equivalente a ${dolarAReal(dolar)} ${dolarAReal(dolar) === 1 ? 'real brazileño' : 'reales brazileños'}`);

function dolarAReal(dolar){
    const pesoMx = 19.18;
    return dolar * pesoMx; 
};

console.log(`${dolar} ${dolar === 1 ? 'dolar americano' : 'dolares americanos'} es equivalente a ${dolarAReal(dolar)} ${dolarAReal(dolar) === 1 ? 'peso mexicano' : 'pesos mexicanos'}`);

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

const base = 15;
const altura = 6;

function areaDeSalaRectangular(base,altura){
    return base * altura;
};

function perimetroDeSalaRectangular(base,altura){
    return (base * 2)+(altura * 2);
};

console.log(`El area de una sala rectangular de ${base} de base y ${altura} de altura es igual a ${areaDeSalaRectangular(base,altura)}, mientras que su perimetro es de ${perimetroDeSalaRectangular(base,altura)}`);

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

const radio = 5;
const pi = 3.14;

function perimetroDeSalaCircular(radio,pi){
    return pi * (2 * radio);
};

function areaDeSalaCircular(radio,pi){
    return pi * (radio * radio);
};

console.log(`El area de una sala circular de ${radio} de diametro es de ${areaDeSalaCircular(radio,pi)}, mientra que su perimetro es de ${perimetroDeSalaCircular(radio,pi)}`);

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

const numeroAMultiplicar = 5;

function multiplicacion(multiplicando){
    resultado = multiplicando;

    for (let i = 1; i < 11; i++) {
        resultado = numeroAMultiplicar * i;
        console.log(multiplicando + " * " + i + " = " + resultado);
    }
};

multiplicacion(numeroAMultiplicar);
