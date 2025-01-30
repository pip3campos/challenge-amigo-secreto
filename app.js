// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let lista = document.getElementById("listaAmigos")
let resultado = document.getElementById("resultado")
function agregarAmigo() {
    resultado.innerHTML = ""
    let amigo = document.getElementById("amigo")
    if (!amigo.value) {
        alert("Debes ingresar un nombre válido")
        return
    }
    amigos.push(amigo.value)
    console.log(amigos);
    amigo.value = ""
    agregarLista()
}

function agregarLista() {
    lista.innerHTML = ""
    for (i = 0; i < amigos.length; i++) {
        let li = document.createElement("li")
        li.textContent = amigos[i]
        lista.appendChild(li)
    }
}

function sortearAmigo() {
    if (amigos.length === 0){
        alert("No hay amigos para sortear")
        return
    }
    lista.innerHTML = ""
    let i = Math.floor(Math.random() * amigos.length)
    let amigoSorteado = amigos[i]
    resultado.innerHTML = `<p>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></p>`
    amigos = []
}