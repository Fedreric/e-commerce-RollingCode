import Producto from "./class-Producto.js";

const formularioAdministrador = document.getElementById(
  "formAdministrarProducto"
);
const inputCodigo = document.getElementById("inputCodigo");
const inputNombre = document.getElementById("inputNombreArticulo");
const inputDescripcion = document.getElementById("inputDescripcionArticulo");
const inputImagen = document.getElementById("inputImagenArticulo");
const inputCategoria = document.getElementById("inputCategoriaArticulo");
const inputStock = document.getElementById("inputStockArticulo");
const inputPreio = document.getElementById("inputPrecioArticulo");
const btnAgregar = document.getElementById("btnAgregar");

let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];

btnAgregar.addEventListener("click", mostrarModalProducto);
formularioAdministrador.addEventListener("submit", cargaProductos);

//funcion que nos permite llamar el modal para poder ser utilizado
const modalProducto = new bootstrap.Modal(
  document.getElementById("modalRegistroProductos")
);

//funcion que nos permite mostrar el modal
function mostrarModalProducto() {
  //modalPelicula nos sirve para crear un intancia de un modal desde JS
  modalProducto.show();
}
//funcion para cargar los datos en el local storage
function cargaProductos(e) {
  e.preventDefault();

  let nuevoProducto = new Producto(
    undefined,
    inputNombre.value,
    inputDescripcion.value,
    inputImagen.value,
    inputCategoria.value,
    inputStock.value,
    inputPreio.value
  );
  listaProductos.push(nuevoProducto);
  guardarProductosLocalStorage();
  limpiarFormulario();
  //cerrar formulario
  modalProducto.hide();
  //cargamos la ultima fila en la tabla para actualizar la misma que se muestra
  dibujarFilasProductos(nuevoProducto);
}
//funcion para guardar los datos en la key lista producto
function guardarProductosLocalStorage() {
  localStorage.setItem("listaProductos", JSON.stringify(listaProductos));
}
//nos sirve para resetar los datos del formulario
function limpiarFormulario() {
  formularioAdministrador.reset();
}
//fin del la logica de Carga de datos en el local Storage
//READ del administrador
// funcion que nos permite cargar los datos del local storage en la clase para convertirlos de tipo objeto
cargaDeDatosInicial();
if (listaProductos) {
  listaProductos = listaProductos.map((prod) => {
    return new Producto(
      prod.codigo,
      prod.nombre,
      prod.detalle,
      prod.imagen,
      prod.categoria,
      prod.stock,
      prod.precio
    );
  });
}
//funcion que nos permite tener una carga de datos inicial
function cargaDeDatosInicial() {
  if (listaProductos.length > 0) {
    //recorre el array y en cada iten del array llama la funcion dibujar para poder dibujar las filas correspondientes
    listaProductos.map((prod) => dibujarFilasProductos(prod));
  }
}
//funcion para dibujar las filas de los producto
function dibujarFilasProductos(prod) {
  let datosTabla = document.getElementById("tablaAdministrador");
  //aqui se dubuja la tabla
  datosTabla.innerHTML += `
 <tr class="fila-Producto">
 <td class="text-truncate">
 <img src="${prod.imagen}" alt=""  width="80px" height="80px">
 
 </td>
 <td class="text-truncate">
   ${prod.nombre}
 </td>
 <td class="text-truncate">${prod.categoria}</td>
 <td class="text-truncate">
  ${prod.detalle}
 </td>
 <td class=" ">${prod.precio}</td>
 <td class=" ">${prod.stock}</td>
 <td class=" ">
   <button
     class="bi bi-pencil-square boton-Editar-Administrador btn" onclick="editarProducto('${prod.codigo}')"></button>
   <button
     class="bi bi-x-lg boton-Eliminar-Administrador btn"
   onclick="eliminarProducto('${prod.codigo}')"></button>
 </td>
</tr>`;
}
//fin del READ

//Eliminar producto
window.eliminarProducto = (codigo) => {
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
      let posicionProducto = listaProductos.findIndex(
        (prod) => prod.codigo === codigo
      );
      listaProductos.splice(posicionProducto, 1);
      guardarProductosLocalStorage();
      let datosTabla = document.getElementById("tablaAdministrador");
      datosTabla.removeChild(datosTabla.children[posicionProducto]);
      Swal.fire("Listo!", "Producto eliminado.", "success");
    }
  });
};

//Editar producto
window.editarProducto = (codigoUnico) => {
  const producto = listaProductos.find((prod) => prod.codigo === codigoUnico);
  console.log(producto);
  modalProducto.show();
  inputCodigo.value = producto.codigo;
  inputNombre.value = producto.nombre;
  inputDescripcion.value = producto.detalle;
  inputImagen.value = producto.imagen;
  inputCategoria.value = producto.categoria;
  inputStock.value = producto.stock;
  inputPreio.value = producto.precio;
};
