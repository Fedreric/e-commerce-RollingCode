let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
const filtrarBusqueda = document.getElementById("buscarProducto");
const inputBuscador = document.getElementById("buscador");
const resultadoBusqueda = document.getElementById("resultado");

filtrarBusqueda.addEventListener("submit", function(event) {
  
  event.preventDefault();

 
  let productoBuscado = listaProductos.find(producto => producto.nombre.toLowerCase() === inputBuscador.value.toLowerCase());

  if (productoBuscado) {
  
    const productoEncontrado = document.createElement("div");
    productoEncontrado.innerHTML = `
      <h2>Producto encontrado:</h2>
      <p>Nombre: ${productoBuscado.nombre}</p>
      <p>Descripción: ${productoBuscado.detalle}</p>
      <p>Categoría: ${productoBuscado.categoria}</p>
      <p>Stock: ${productoBuscado.stock}</p>
    `;

   
    resultadoBusqueda.innerHTML = "";
    resultadoBusqueda.appendChild(productoEncontrado);
  } else {
    
    resultadoBusqueda.innerHTML = "<p>No se encontró ningún producto con ese nombre.</p>";
  }
});