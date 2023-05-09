let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito/"+usuario.nombreUsuario)) || [];
let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
let contenedorCarrito = document.getElementById("contenedorCarrito");
let contenedorSubtotal = document.getElementById("contenedorSubtotal");
let contadorCarrito = document.getElementById("contadorCarrito");
let estadoDes = false;

readCarrito();

function readCarrito() {
  //actualiza el valor del contador de productos
  contadorCarritoAct();
  let total = 0;
  // se muestra en pantalla cada producto cargado al carrito
  listaCarrito.forEach((producto) => {
    contenedorCarrito.innerHTML += `
    <article
    class="row justify-content-between container align-items-center contenedor-prd-carrito my-3 p-0 m-0"
  >
    <aside class="col-2 col-md-2 text-center">
      <img
        src="${producto.imagen}"
        alt="${producto.imagen}"
        class="img-fluid"
      />
    </aside>
    <aside class="col-8 col-md-8 text-center">
      <h3 class="display-6 fs-5">${producto.categoria} - ${producto.nombre}</h3>
      <p class="d-none d-sm-none d-md-block">
          ${producto.detalle}
      </p>
    </aside>
    <aside class="col-2 text-center p-0">
      <h3 class="display-6 fs-6 p-0 m-0">Precio</h3>
      <p class="p-0 m-0 my-3 fs-3">$${producto.precio}</p>
      <button
        class="btn-eliminar-carrito"
        onclick="eliminarProductoCarrito('${producto.codigo}')"
      >
        Eliminar
      </button>
    </aside>
  </article>      `;
  });
  //se muestra la suma total de los precios de producto
  subTotalCarrito();
  function subTotalCarrito() {
    listaCarrito.forEach((producto) => {
      total = total + parseInt(producto.precio);
    });
    contenedorSubtotal.innerHTML = `
                    <p class="fs-4">Total: <span class="precio-poducto fs-2">$${total}</span></p>
            `;
  }
}

function eliminarProductoCarrito(codigo) {
  //variables necesarias para el manejo del stock
  let indiceProducto = listaProductos.findIndex(
    (producto) => producto.codigo === codigo
  );
  let productoStock = parseInt(listaProductos[indiceProducto].stock);
  Swal.fire({
    title: "Estas seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#6246ea",
    cancelButtonColor: "#e45858",
    confirmButtonText: "Si, eliminar!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let posicionProducto = listaCarrito.findIndex(
        (prod) => prod.codigo === codigo
      );
      listaCarrito.splice(posicionProducto, 1);
      localStorage.setItem("listaCarrito/"+usuario.nombreUsuario, JSON.stringify(listaCarrito));
      let productosCarrito = document.getElementById("contenedorCarrito");
      productosCarrito.removeChild(productosCarrito.children[posicionProducto]);
      //se agrega de nuevo el producto al stock
      listaProductos[indiceProducto].stock = productoStock + 1;
      //se guarda el nuevo valor en el local storage
      localStorage.setItem("listaProductos", JSON.stringify(listaProductos));
      //se actualizan los datos mostrados en pantalla
      productosCarrito.innerHTML = "";
      readCarrito();
      contadorCarritoAct();
      Swal.fire("Listo!", "Producto eliminado.", "success");
    }
  });
}

//modifica el span en el maquetado con la cantidad de productos cargados en el carrito
function contadorCarritoAct() {
  contadorCarrito.innerText = listaCarrito.length;
}

function realizarCompra(){
  window.location.href = window.location.origin + "/pages/error404.html";
}