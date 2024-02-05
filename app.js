let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let maximoDeIntentos = 10;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indica un numero entre 1 y ${maximoDeIntentos}`);
    numeroSecreto = asignarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja.
    limpiarCaja();
    //Inicializar contador de intentos en 1
    //Obtener un nuevo numero secreto
    //Mostrar mensajes iniciales
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    return;

}

function limpiarCaja(){
    document.getElementById('valorDeUsuario').value = '';
    return;
}

function asignarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*maximoDeIntentos)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == maximoDeIntentos){
        asignarTextoElemento('p', 'Se han sorteado todos los numeros posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return asignarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

condicionesIniciales();


