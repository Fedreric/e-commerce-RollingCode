let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
const inputBuscador = document.getElementById("buscador");
const resultadoBusqueda = document.getElementById("resultado");
const formBuscarProducto = document.getElementById("buscarProducto");
const botonBuscar = document.getElementById("botonBuscar");

botonBuscar.addEventListener("click", function(event) {
  event.preventDefault(); // evita la recarga de la página
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
      resultadoBusqueda.classList.add('row');
      arrayFiltrado.forEach(producto => {
          resultadoBusqueda.innerHTML += `
          <div class="col-md-4 card text-bg-light my-3 p-0 border border-2 mx-2">
            <p class= "text-center fw-light">${producto.categoria.toUpperCase()}</p>
            <a href="pages/detalle.html">
              <div class="card-img-overlay">
                <h5 class="card-title mt-3 text-center">${producto.nombre.toUpperCase()}</h5>
              </div>
            </a>
            <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid mt-5">
          </div>
          `;
      });
  } else {
      resultadoBusqueda.innerHTML = `<p class="mt-3 text-center fs-3 fw-bold">No se encontraron productos asociados con: ${inputBuscador.value}</p>`;
  }
}