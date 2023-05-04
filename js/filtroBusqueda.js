let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
const inputBuscador = document.getElementById("buscador");
const resultadoBusqueda = document.getElementById("resultado");

function buscar() {
    const searchTerm = inputBuscador.value.toLowerCase();
    const arrayFiltrado = listaProductos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm)
    );
    mostrarProductosBuscados(arrayFiltrado);
}

function mostrarProductosBuscados(arrayFiltrado) {
    resultadoBusqueda.innerHTML = '';

    if (arrayFiltrado.length > 0) {
        arrayFiltrado.forEach(producto => {
            resultadoBusqueda.innerHTML += `
            <div class="col-md-6 col-lg-4 card text-bg-light my-3 p-0">
                <a href="pages/detalle.html">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="w-auto img-fluid mt-5">
                    <div class="card-img-overlay tituloCard ">
                        <h5 class="card-title">${producto.nombre.toUpperCase()}</h5>
                    </div>
                </a>
            </div>
            `;
        });
    } else {
        resultadoBusqueda.innerHTML = `<p class="text-center fs-2 fw-light">No se encontraron productos asociados con: ${inputBuscador.value}</p>`;
    }
}

inputBuscador.addEventListener("input", buscar);