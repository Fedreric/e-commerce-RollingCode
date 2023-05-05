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
                          <button class="btn boton" onClick="detalleProducto('${producto.codigo}')" id="btnDetalleProducto">Ver más</button>
                        </div>
                      </div>
                    </aside>`;
  }
}
window.detalleProducto = (codigo) => {
  window.location.href = window.location.origin + '/pages/detalle.html?codigo='+codigo;
}


const inputBuscador = document.getElementById("buscador");
const resultadoBusqueda = document.getElementById("resultado");
const botonBuscar = document.getElementById("botonBuscar");

botonBuscar.addEventListener("click", function(event) {
  event.preventDefault(); 
  buscar();
  inputBuscador.focus();
});

inputBuscador.addEventListener("input", function() {
  buscar();
});

function buscar() {
  const terminoBusc = inputBuscador.value.toLowerCase();
  
  if (terminoBusc === '') {
    resultadoBusqueda.innerHTML = `<p class="mt-3 text-center fs-3 fw-light">Ingresa un término de búsqueda</p>`;
    return;
  }
  
  const arrayFiltrado = listaProductos.filter(producto =>
    producto.nombre.toLowerCase().includes(terminoBusc)
  );
  
  mostrarProductosBuscados(arrayFiltrado);
}

function mostrarProductosBuscados(arrayFiltrado) {
  resultadoBusqueda.innerHTML = '';

  if (arrayFiltrado.length > 0) {
    resultadoBusqueda.classList.add('row', 'justify-content-center');
    arrayFiltrado.forEach(producto => {
        resultadoBusqueda.innerHTML += `
        <div class="col-12 col-md-3 col-lg-3 card text-bg-light mx-4 my-3 p-0 border border-2 d-flex flex-column h-100">
           <div class="text-center">
             <p class="fw-light">${producto.categoria.toUpperCase()}</p>
             <button class="btn btn-link" onclick="window.detalleProducto('${producto.codigo}')">
               <div class="card-img-overlay">
                <h5 class="card-title mt-3">${producto.nombre.toUpperCase()}</h5>
               </div>
             </button>
           </div>
              <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid mt-5">
        </div>
         `;
    });
    resultadoBusqueda.innerHTML += `
        <hr class= "text-dark m-5 border-3">
            `;
} else {
    resultadoBusqueda.innerHTML = `<p class="mt-3 text-center fs-3 fw-bold">No se encontraron productos asociados con: ${inputBuscador.value}</p>`;
}
}