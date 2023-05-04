let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
const filtrarBusqueda = document.getElementById("buscarProducto");
const inputBuscador = document.getElementById("buscador");
const resultadoBusqueda = document.getElementById("resultado");

filtrarBusqueda.addEventListener("submit", function(event) {
    event.preventDefault();
    let productoBuscado = listaProductos.find(producto => producto.nombre.toLowerCase() === inputBuscador.value.toLowerCase());
    if (productoBuscado) {
      const modalProductoEncontrado = new bootstrap.Modal(document.getElementById('modalpEncontrado'), {});
      
      document.getElementById("modalBody").innerHTML = "";
      
      const productoEncontrado = document.createElement("div");
      productoEncontrado.innerHTML = `
        <p>Nombre: ${productoBuscado.nombre}</p>
        <p>Descripción: ${productoBuscado.detalle}</p>
        <p>Categoría: ${productoBuscado.categoria}</p>
        <p>Stock: ${productoBuscado.stock}</p>
      `;
      
      document.getElementById("modalBody").appendChild(productoEncontrado);
      modalProductoEncontrado.show();
    } else {
      const modalProductoNoEncontrado = new bootstrap.Modal(document.getElementById('modalpNoEncontrado'), {});
      modalProductoNoEncontrado.show();
    }
  });