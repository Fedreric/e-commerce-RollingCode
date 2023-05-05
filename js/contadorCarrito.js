let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || [];
let contadorCarrito = document.getElementById("contadorCarrito");

contadorCarritoAct();

function contadorCarritoAct(){
    contadorCarrito.innerText = listaCarrito.length;
}