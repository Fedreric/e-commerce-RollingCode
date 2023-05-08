let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || [];
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
      <h3 class="display-6 fs-4">${producto.categoria} - ${producto.nombre}</h3>
      <button
        class="border-0 bi bi-chevron-down btn-desplegar-desc"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#${producto.codigo}"
        aria-expanded="false"
        aria-controls="${producto.codigo}"
        id="btn-desplegar-desc"
        onclick="btnDesplegarDesc()"
      ></button>
      <div class="collapse" id="${producto.codigo}">
        <p class="card card-body">
          ${producto.detalle}
        </p>
      </div>
    </aside>
    <aside class="col-2 text-center p-0">
      <h3 class="display-6 fs-6 p-0 m-0">Precio</h3>
      <p class="p-0 m-0">$${producto.precio}</p>
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
                    <p class="precio-poducto fs-4">Sub Total: $${total}</p>
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
      localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito));
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

function btnDesplegarDesc(){
  const botonDesplegar = document.getElementById('btn-desplegar-desc');
  if(estadoDes === false){
    estadoDes = true;
    botonDesplegar.className = 'border-0 bi bi-chevron-up';
  }else{
    estadoDes = false;
    botonDesplegar.className = 'border-0 bi bi-chevron-down';
  }
}