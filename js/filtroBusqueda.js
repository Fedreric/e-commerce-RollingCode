const productoHTML = document.getElementById("producto");
const listaProductos = JSON.parse(localStorage.getItem("lista_Producto"));
const producto = listaProductos[0]; // Suponiendo que el producto que quieres mostrar es el primero de la lista

productoHTML.innerHTML = `
  <h2>${producto.nombre}</h2>
  <img src="${producto.imagen}" alt="${producto.nombre}">
  <p>${producto.detalle}</p>
  <p>Categoría: ${producto.categoria}</p>
  <p>Stock: ${producto.stock}</p>
`;
