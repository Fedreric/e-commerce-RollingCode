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
        producto.stock,
        producto.precio
      )
  );
}

cargarCards();

function cargarCards() {
  // verificar si listaProductos tiene datos
  if (listaProductos.length > 0) {
    //dibujes los datos en las cards
    listaProductos.map((producto, indice) =>
      crearCardProductos(producto, indice)
    );
  }
}

function crearCardProductos(producto) {
  let datosProductos = document.getElementById("cardsProductos");
  if (producto.stock == 0) {
    datosProductos.innerHTML += `
    <aside class="col-md-6 col-lg-4 my-3">
                  <div class="card h-100 opacity-75">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <div class="d-flex mb-3 text-secondary-emphasis fw-semibold fs-5 card-text">
                        <p class="me-auto p-2">Precio: $${producto.precio} </p>
                        <p class="p-2">Stock: ${producto.stock} ui</p>
                      </div>
                      <button class="btn boton" onClick="detalleProducto('${producto.codigo}')">Ver más</button>
                    </div>
                  </div>
                </aside>`;
  } else {
    datosProductos.innerHTML += `
        <aside class="col-md-6 col-lg-4 my-3">
                      <div class="card h-100">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                          <h5 class="card-title">${producto.nombre}</h5>
                          <div class="d-flex mb-3 text-secondary-emphasis fw-semibold fs-5 card-text">
                            <p class="me-auto p-2">Precio: $${producto.precio} </p>
                            <p class="p-2">Stock: ${producto.stock} ui</p>
                          </div>
                          <button class="btn boton" onClick="detalleProducto('${producto.codigo}')">Ver más</button>
                        </div>
                      </div>
                    </aside>`;
  }
}
window.detalleProducto = (codigo) => {
  window.location.href = window.location.origin + '/pages/detalle.html?codigo='+codigo;
}

