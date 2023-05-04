let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
const filtrarBusqueda = document.getElementById("buscarProducto");
const inputBuscador = document.getElementById("buscador");
const resultadoBusqueda = document.getElementById("resultado");

filtrarBusqueda.addEventListener("submit", function(event) {
  event.preventDefault();
  let productoBuscado = listaProductos.find(producto => producto.nombre.toLowerCase() === inputBuscador.value.toLowerCase());
  if (productoBuscado) {
    // Mostrar el modal de producto encontrado
    const modalProductoEncontrado = new bootstrap.Modal(document.getElementById('productoEncontradoModal'), {});
    
    const productoEncontrado = document.createElement("div");
    productoEncontrado.innerHTML = `
      <h2>Producto encontrado:</h2>
      <p>Nombre: ${productoBuscado.nombre}</p>
      <p>Descripción: ${productoBuscado.detalle}</p>
      <p>Categoría: ${productoBuscado.categoria}</p>
      <p>Stock: ${productoBuscado.stock}</p>
    `;
    
    document.getElementById("modalBody").appendChild(productoEncontrado);
    modalProductoEncontrado.show();
  } else {
    // Mostrar el modal de producto no encontrado
    const modalProductoNoEncontrado = new bootstrap.Modal(document.getElementById('productoNoEncontradoModal'), {});
    modalProductoNoEncontrado.show();
  }
});