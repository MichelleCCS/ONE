// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function agregarAmigo() {
  let amigoUsuario = document.getElementById("amigo").value;

  if (amigoUsuario === "") {
    alert("Por favor, ingresa el nombre de tu amigo secreto.");
  } else {
    nombreAmigos.push(amigoUsuario); // Agrega el nuevo amigo al arreglo
    actualizaAmigos(); // Llama a la función para actualizar la lista
    limpiarCaja(); 
  }
}

function actualizaAmigos() {
  let listaVista = document.getElementById("listaAmigos");
  listaVista.innerHTML = ""; // Limpia el contenido actual de la lista

  for (let i = 0; i < nombreAmigos.length; i++) {
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = nombreAmigos[i];
    listaVista.appendChild(nuevoItem);
  }
}

function limpiarCaja () {
    document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
    if (nombreAmigos.length === 0) { // Comprueba que el array nombreAmigos no está vacío.
        alert("Error, no se puede sortear una lista vacía");
    } else {
        let numeroAzar = Math.floor(Math.random() * nombreAmigos.length);
        let amigoGanador = nombreAmigos[numeroAzar];
        
        let resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = ""; // Limpia el contenido anterior
        resultadoElemento.innerHTML = amigoGanador; // Asigna el nombre del amigo ganador
    }
}