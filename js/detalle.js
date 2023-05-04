//extraer el codigo del producto del url
const codigoProd = new URLSearchParams(window.location.search);
//buscar producto
 let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [];
const producto = listaProductos.find(prod => prod.codigo === codigoProd.get('codigo'));
//mostrar los datos del producto
// const detalle = document.getElementById('contenedorDetalle');

// detalle.innerHTML = ` `