let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
const inputBuscador = document.getElementById("buscador");
const resultadoBusqueda = document.getElementById("resultado");

function buscar() {
  const terminoBusc = inputBuscador.value.toLowerCase();
  
  if (terminoBusc === '') {
      resultadoBusqueda.innerHTML = '';
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
              <a href="pages/detalle.html">
              <div class="card-img-overlay">
                      <h5 class="card-title">${producto.nombre.toUpperCase()}</h5>
                  </div>
                  <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid mt-5">
              </a>
          </div>
          `;
      });
  } else {
      resultadoBusqueda.innerHTML = `<p class="text-center fs-2 fw-light">No se encontraron productos asociados con: ${inputBuscador.value}</p>`;
  }
}

inputBuscador.addEventListener("input", buscar);