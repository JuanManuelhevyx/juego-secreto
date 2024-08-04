// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java','Ruby','GoLang');

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista(lista){
    let i = 0;
    while(i != lista.length){
        console.log(lista[i]);
        i++;
    };
};

mostrarLista(lenguajesDeProgramacion);

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarListaInversa(lista){
    let i = lista.length-1;
    while(i != -1){
        console.log(lista[i]);
        i--;
    };
};

mostrarListaInversa(lenguajesDeProgramacion);

// Crea una función que calcule el promedio de los elementos en una lista de números.

let listaDeNumeros = [1,2,3,4];

function promediarLista(lista){
    let i = lista.length-1;
    let resultado = 0;

    while(i != -1){
        resultado += lista[i];
        i--;
    };
    return resultado/lista.length;
};

console.log(promediarLista(listaDeNumeros));

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// esto afecta a la lista porque la ordena
function numeroMasGrandeYMasChico(lista){
    function comparar(a,b){
        return a - b;
    };
    lista.sort(comparar);

    console.log(`El numero mas chico es ${lista[0]} y el mas grande es ${lista[lista.length-1]}`);
};

// numeroMasGrandeYMasChico(listaDeNumeros);

// Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaElementosLista(lista){
    let i = lista.length - 1;
    let resultado = 0;

    while(i != -1){
        resultado += lista[i];
        i--;
    }

    return resultado;
}

console.log(sumaElementosLista(listaDeNumeros));

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function elementoEspecifico(lista,elementoBuscado){
    return lista.indexOf(elementoBuscado) != -1 ? `La posición del numero ${elementoBuscado} en la lista es ${lista.indexOf(elementoBuscado)}` : -1;
};

console.log(elementoEspecifico(listaDeNumeros,41));

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

let listaDeNumeros2 = [2,4,7,1]

function sumaDosListas(lista1, lista2){
    let i = 0;
    resultado = [];

    while(i != lista1.length){
        resultado.push(lista1[i] + lista2[i]);
        i++;
    };
    return resultado;
};

console.log(sumaDosListas(listaDeNumeros,listaDeNumeros2));

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function listaAlCuadrado(lista){
    let i = 0;
    resultado = [];

    while(i != lista.length){
        resultado.push(lista[i] * lista[i]);
        i++;
    };
    return resultado;
};

console.log(listaAlCuadrado(listaDeNumeros));