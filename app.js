let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentosMaximos = 3;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
};

condicionesIniciales();

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    // console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled',true);
        asignarTextoElemento('p',`Acertaste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'} de ${intentosMaximos}`);
    }else if(intentos != intentosMaximos){
        if(numeroSecreto>numeroDeUsuario){
            asignarTextoElemento('p',`El numero secreto es mayor, intentos: ${intentos} de ${intentosMaximos}`);
        }else{
            asignarTextoElemento('p',`El numero secreto es menor, intentos: ${intentos} de ${intentosMaximos}`);
        };
        intentos++;
        limpiarCaja();
    }else{
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled',true);
        asignarTextoElemento('p',`Te haz quedado sin intentos, prueba otra vez`);
    };
    return;
};

function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
};

function asignarNumeroSecreto(){
    let numeroAleatorio =  Math.floor(Math.random()*numeroMaximo)+1;

    // Si el numero aleatoiro se encuentra en la lista
    console.log(listaNumerosSorteados);
    console.log(numeroSecreto);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se han usado todos los numeros disponibles');
    }else{
        if(listaNumerosSorteados.includes(numeroAleatorio)){
            return asignarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroAleatorio);
            return numeroAleatorio;
        };
    };
};

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = asignarNumeroSecreto();
    intentos = 1;
};

function reiniciarJuego(){
    /*Lo que tiene que hacer la función es:
        - Limpiar la caja
        - Indicar mensaje de intervalo de números
        - Generar el número aleatorio
        - Deshabilitar el boton de nuevo juego
        - Inicializar el intervalo de numeros
    */
   limpiarCaja();
   condicionesIniciales();
   document.getElementById('reiniciar').setAttribute('disabled',true);
   document.getElementById('intentar').removeAttribute('disabled');
};