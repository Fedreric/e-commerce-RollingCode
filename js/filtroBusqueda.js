let lista_Productos = JSON.parse(localStorage.getItem("lista_Producto")) || [];
console.log(lista_Productos);

const formulario_Busqueda = document.getElementById("buscarProducto");
const input_Buscador = document.getElementById("buscador");

const boton_Buscar = document.querySelector('#buscarProducto button[type="submit"]');

boton_Buscar.addEventListener('click', function(e) {
  e.preventDefault();

  let productoBuscado = lista_Productos.find(function(producto) {
    return producto.nombre.toLowerCase() === input_Buscador.value.toLowerCase();
  });

  if (productoBuscado) {
    console.log("El producto fue encontrado:");
    console.log(productoBuscado);

    const productoEncontradoDiv = document.getElementById("producto-encontrado");
    productoEncontradoDiv.innerHTML = `
      <h2>Producto encontrado:</h2>
      <p>Nombre: ${productoBuscado.nombre}</p>
      <p>Descripción: ${productoBuscado.detalle}</p>
      <p>Categoría: ${productoBuscado.categoria}</p>
      <p>Stock: ${productoBuscado.stock}</p>
    `;
  } else {
    console.log("El producto no fue encontrado.");
  }
});