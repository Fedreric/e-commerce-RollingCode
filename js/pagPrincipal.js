import Producto from "./class-Producto.js";

let listaProductos = localStorage.getItem("listaProductos");

if (!listaProductos) {
  //si lista productos no existe en Localstorage
  listaProductos = [];
} else {
  //si lista productos tiene datos, quiero transformarlo en un array de objetos Pelicula
  listaProductos = JSON.parse(listaProductos).map(
    (producto) =>
      new Producto(
        producto.codigo,
        producto.nombre,
        producto.detalle,
        producto.imagen,
        producto.categoria,
        producto.stock
      )
  );
}

function crearCardProductos(producto){
    let datosProductos = document.getElementById('cardsProductos');
    datosProductos.innerHTML += `
    <aside class="col-md-6 col-lg-4 my-3">
                  <div class="card h-100">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <div class="d-flex mb-3 text-secondary-emphasis fw-semibold fs-5 card-text">
                        <p class="me-auto p-2">Precio: ${producto.precio} </p>
                        <p class="p-2">Stock: ${producto.stock} ui</p>
                      </div>
                      <a href="./pages/detalle.html" class="btn boton">Ver más</a>
                    </div>
                  </div>
                </aside>`
}

