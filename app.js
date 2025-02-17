// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

// 1er paso guardar variables
// OBTENCION DEL NOMBRE (INPUT)
const input_name = document.getElementById("amigo") // INPUT DE NOMBRE AMIGO
const button_name = document.querySelector(".button-add") // BOTON DE AÑADIR
const name_list = document.querySelector(".name-list") // LISTA DE AMIGOS



console.log(name_list)

//2do validar campo de entrada
function agregarAmigo(){

    if (input_name.value != "") {
        amigos.push(input_name.value)
        console.log(amigos)
        input_name.value = ""   
        const h1 = document.createElement("h1")
    }
    
    else {
        alert("POR FAVOR INGRESA UN NOMBRE")
    }
    
    ListaAmigos();
}

//3ero Implementacion de función para actualizar la lista de amigos
function ListaAmigos(){
    name_list.innerHTML = ""
    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement("li")
        li.textContent = amigos[i]
        name_list.appendChild(li)
    }
}


function sortearAmigo(){
    let numAmigos = amigos.length
    if(numAmigos == 0){
        alert("NO TIENES AMIGOS PARA EL SORTEO")
    }
    else{
        let indiceGanador = Math.floor(Math.random() * numAmigos)
        let ganador = amigos[indiceGanador]
        alert("El amigo sorteado es: " + ganador)
    }

}
