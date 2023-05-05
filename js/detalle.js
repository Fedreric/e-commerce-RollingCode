//extraer el codigo del producto del url
const codigoProd = new URLSearchParams(window.location.search);
//buscar producto
let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [];
let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || [];
const producto = listaProductos.find(prod => prod.codigo === codigoProd.get('codigo'));
//mostrar los datos del producto
const detalle = document.getElementById('contenedorDetalle');
let contadorCarrito = document.getElementById("contadorCarrito");
const btnAgregarCarrito = document.getElementById('btnAgregarCarrito');
const agotado = document.getElementById('stock')

readDetalle();
contadorCarritoAct();
function readDetalle(){
    if(parseInt(producto.stock) === 0){
        detalle.innerHTML = `        
    <aside class="col-md-6">
        <img
            src="${producto.imagen}"
            alt="${producto.categoria}, ${producto.nombre}"
            class="w-100 opacity-75"
        />
    </aside>
    <aside class="col-md-6">
        <h1>${producto.categoria} - ${producto.nombre}</h1>
        <hr />
        <p>
            ${producto.detalle}
        </p>
        <div class="my-3">
            <span class="precio-poducto">$${producto.precio}</span>
        </div>
        <button class="boton text-light my-3 btn-deshabilitado" onClick="agregarCarrito('${producto.codigo}')" id="btnAgregarCarrito">Agregar al carrito</button>
        <span class="stock" id="stock">AGOTADO!</span>
    </aside> 
    `;
    }else{
        detalle.innerHTML = `        
    <aside class="col-md-6">
        <img
            src="${producto.imagen}"
            alt="${producto.categoria}, ${producto.nombre}"
            class="w-100"
        />
    </aside>
    <aside class="col-md-6">
        <h1>${producto.categoria} - ${producto.nombre}</h1>
        <hr />
        <p>
            ${producto.detalle}
        </p>
        <div class="my-3">
            <span class="precio-poducto">$${producto.precio}</span>
        </div>
        <button class="boton text-light my-3"onClick="agregarCarrito()" id="btnAgregarCarrito">Agregar al carrito</button>
        <span class="stock" id="stock">Stock: ${producto.stock}</span>
    </aside> 
    `;
    }
}

function agregarCarrito(){
    let productoStock = parseInt(producto.stock);
    //confirma que haya productos en el stock y recien carga el prod al carrito
    if(productoStock > 0){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Listo <i class="bi bi-cart"></i>',
            showConfirmButton: false,
            timer: 1500
          })
        listaCarrito.push(producto);
        agregarProductoCarritoLocalStorage();
        //se resta en uno el stock
        producto.stock = productoStock - 1;
        //se guarda el nuevo valor en el local storage
        localStorage.setItem("listaProductos", JSON.stringify(listaProductos));  
        readDetalle(); 
        contadorCarritoAct();
    }
}
function agregarProductoCarritoLocalStorage(){
    localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito));
}

//modifica el span en el maquetado con la cantidad de productos cargados en el carrito
function contadorCarritoAct(){
    contadorCarrito.innerText = listaCarrito.length;
  }