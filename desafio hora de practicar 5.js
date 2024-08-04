function holaMundo(){
    return console.log('Hola Mundo');
};

function saludar(nombre){
    return console.log(`¡Hola, ${nombre}!`);
};

function dobleNumero(numero){
    return console.log('numero doble = '+numero * 2);
}

function promedio(num1, num2, num3){
    return console.log((num1 + num2 + num3)/3);
}

function numeroMayor(num1, num2){
    return console.log(num1 > num2 ? num1 : num2);
}

function numeroAlCuadrado(numero){
    return console.log(numero * numero);
}

// holaMundo();
// saludar('juan');
// dobleNumero(4);
promedio(41,55,34);
numeroMayor(123,444);
numeroAlCuadrado(5);