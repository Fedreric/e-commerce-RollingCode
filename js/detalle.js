//extraer el codigo del producto del url
const codigoProd = new URLSearchParams(window.location.search);
//buscar producto
let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [];
let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || [];
const producto = listaProductos.find(prod => prod.codigo === codigoProd.get('codigo'));
//mostrar los datos del producto
const detalle = document.getElementById('contenedorDetalle');

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
    <button class="boton text-light my-3" onClick="agregarCarrito()">Agregar al carrito</button>
    <span class="stock">Stock: ${producto.stock}</span>
</aside> 
`
function agregarCarrito(){
    listaCarrito.push(producto);
    console.log(listaCarrito);
    agregarProductoCarritoLocalStorage();
}
export default function agregarProductoCarritoLocalStorage(){
    localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito));
}