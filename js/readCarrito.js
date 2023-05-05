let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || [];
let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [];
let contenedorCarrito = document.getElementById("contenedorCarrito");
let contenedorSubtotal = document.getElementById("contenedorSubtotal");
let contadorCarrito = document.getElementById("contadorCarrito");

readCarrito();

function readCarrito(){
    contadorCarritoAct();
    let total = 0;
    listaCarrito.forEach(producto => {
        contenedorCarrito.innerHTML +=`
        <tr>
        <td class="w-25">
            <img
            src="${producto.imagen}"
            class="img-fluid rounded float-start w-75 mx-auto"
            alt="${producto.nombre}"
          />
        </td>
        <td class="align-middle">
          <p class="text-secondary text-truncate">
            ${producto.detalle}
          </p>
        </td>
        <td class="align-middle">
          <p class="precio-poducto fs-5">$${producto.precio}</p>
        </td>
        <td class="align-middle">
          <button
          class="bi bi-x-lg boton-Eliminar-Administrador btn"
          onclick="eliminarProductoCarrito('${producto.codigo}')"
          ></button>
        </td>
      </tr>        `
    });
    subTotalCarrito();
    function subTotalCarrito(){
        listaCarrito.forEach(producto => {
            total = total + parseInt(producto.precio);
        });
        contenedorSubtotal.innerHTML =`
                    <p class="precio-poducto fs-4">Sub Total: $${total}</p>
            `
    }
}


function eliminarProductoCarrito(codigo){
  let indiceProducto = listaProductos.findIndex(producto => producto.codigo === codigo)
  let productoStock = parseInt(listaProductos[indiceProducto].stock);
    Swal.fire({
        title: 'Estas seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6246ea',
        cancelButtonColor: '#e45858',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            let posicionProducto = listaCarrito.findIndex(prod => prod.codigo === codigo);
            listaCarrito.splice(posicionProducto, 1);
            localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito));
            let productosCarrito = document.getElementById('contenedorCarrito');
            productosCarrito.removeChild(productosCarrito.children[posicionProducto]);
            //se agrega de nuevo el producto al stock
            listaProductos[indiceProducto].stock = productoStock + 1;
            //se guarda el nuevo valor en el local storage
            localStorage.setItem("listaProductos", JSON.stringify(listaProductos));  
            readDetalle(); 
            productosCarrito.innerHTML = "";
            readCarrito();
            Swal.fire(
                'Listo!',
                'Producto eliminado.',
                'success'
            )
        }
    })
};

function contadorCarritoAct(){
    contadorCarrito.innerText = listaCarrito.length;
}