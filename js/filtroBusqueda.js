let lista_Productos = JSON.parse(localStorage.getItem("lista_Producto")) || [];

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
  } else {
    console.log("El producto no fue encontrado.");
  }
});

//productoHTML.innerHTML = `
  //<h2>${producto.nombre}</h2>
  //<img src="${producto.imagen}" alt="${producto.nombre}">
  //<p>${producto.detalle}</p>
  //<p>Categoría: ${producto.categoria}</p>
  //p>Stock: ${producto.stock}</p>
//`;
