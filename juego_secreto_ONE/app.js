/* let titulo = document.querySelector("h1"); //querySelector permite acceder a cada uno de los elementos de un HTML
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";*/

let numeroSecreto = 0;
let intentos = 0;
let listaSorteados = [];
let numeroMax = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //en esta función no retorna nada, pero es buena práctica agregarlo
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p", `Yupi! acertaste en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { //Cuando no se acierta sigue con esto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ("p", "El número secreto es menor");
        } else {
            asignarTextoElemento ("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto () { 
    let numeroGenerado = Math.floor(Math.random()*numeroMax) + 1;

    if (listaSorteados.length == numeroMax) { //para evitar recursividad infinita
        asignarTextoElemento ("p", "Ya ocupaste todos los números posibles")
    } else {
        if (listaSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesInicio () {
    asignarTextoElemento ("h1", "Juego del número secreto");
    asignarTextoElemento ("p", `Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego () {
    //Se llama a la función creada para limpiar la caja
    limpiarCaja();
    // Necesita tener los mensajes que estaban al inicio, generar el número aleatorio y reiniciar número de intentos
    condicionesInicio();
    //Debe deshabilitar el botón de nuevo juego nuevamente
    document.querySelector("#reiniciar").setAttribute("disabled","true");     
}

condicionesInicio(); 