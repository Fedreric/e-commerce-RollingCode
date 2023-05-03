// obtener los datos del almacenamiento local al cargar la página
let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];

// obtener referencias a los elementos relevantes del DOM
const formularioBusqueda = document.getElementById("buscarProducto");
const inputBuscador = document.getElementById("buscador");
const productoEncontradoDiv = document.getElementById("producto-encontrado");

// agregar un manejador de eventos para el formulario de búsqueda
formularioBusqueda.addEventListener("submit", function(event) {
  // prevenir la recarga de la página
  event.preventDefault();

  // buscar el producto en la lista de productos
  let productoBuscado = listaProductos.find(producto => producto.nombre.toLowerCase() === inputBuscador.value.toLowerCase());

  if (productoBuscado) {
    // crear un elemento para mostrar la información del producto encontrado
    const productoEncontradoEl = document.createElement("div");
    productoEncontradoEl.innerHTML = `
      <h2>Producto encontrado:</h2>
      <p>Nombre: ${productoBuscado.nombre}</p>
      <p>Descripción: ${productoBuscado.detalle}</p>
      <p>Categoría: ${productoBuscado.categoria}</p>
      <p>Stock: ${productoBuscado.stock}</p>
    `;

    // agregar el elemento al DOM
    productoEncontradoDiv.innerHTML = "";
    productoEncontradoDiv.appendChild(productoEncontradoEl);
  } else {
    // si no se encuentra el producto, mostrar un mensaje de error
    productoEncontradoDiv.innerHTML = "<p>No se encontró ningún producto con ese nombre.</p>";
  }
});