import Producto from "./class-Producto.js";

const formulario_Administrador = document.getElementById(
  "formAdministrarPelicula"
);
const input_Codigo = document.getElementById("inputCodigo");
const input_Nombre = document.getElementById("input-Nombre-Articulo");
const input_Descripcion = document.getElementById("input-Descripcion-Articulo");
const input_Imagen = document.getElementById("input-Imagen-Articulo");
const input_Categoria = document.getElementById("input-Categoria-Articulo");
const input_Stock = document.getElementById("input-Stock-Articulo");
const btn_Agregar = document.getElementById("btn-Agregar");

let lista_Productos = JSON.parse(localStorage.getItem("lista_Producto")) || [];

btn_Agregar.addEventListener("click", mostrar_Modal_Producto);
formulario_Administrador.addEventListener("submit", carga_Productos);

//funcion que nos permite llamar el modal para poder ser utilizado
const modal_Producto = new bootstrap.Modal(
  document.getElementById("modal-Registro-Productos")
);

//funcion que nos permite mostrar el modal
function mostrar_Modal_Producto() {
  //modalPelicula nos sirve para crear un intancia de un modal desde JS
  modal_Producto.show();
}
//funcion para cargar los datos en el local storage
function carga_Productos(e) {
  e.preventDefault();

  let nuevo_Producto = new Producto(
    undefined,
    input_Nombre.value,
    input_Descripcion.value,
    input_Imagen.value,
    input_Categoria.value,
    input_Stock.value
  );
  lista_Productos.push(nuevo_Producto);
  guardar_Productos_Local_Storage();
  limpiar_Formulario();
  //cerrar formulario
  modal_Producto.hide();
  //cargamos la ultima fila en la tabla para actualizar la misma que se muestra
  dibujar_Filas_Productos(nuevo_Producto);
}
//funcion para guardar los datos en la key lista producto
function guardar_Productos_Local_Storage() {
  localStorage.setItem("lista_Producto", JSON.stringify(lista_Productos));
}
//nos sirve para resetar los datos del formulario
function limpiar_Formulario() {
  formulario_Administrador.reset();
}
//fin del la logica de Carga de datos en el local Storage
//READ del administrador
// funcion que nos permite cargar los datos del local storage en la clase para convertirlos de tipo objeto 
carga_De_Datos_Inicial()
if (lista_Productos) {
  lista_Productos = lista_Productos.map((prod)=>  { return (
    new Producto(prod.codigo,prod.nombre,prod.detalle,prod.imagen,prod.categoria,prod.stock)
    )
  }
  );
}
//funcion que nos permite tener una carga de datos inicial
function carga_De_Datos_Inicial(){
  if(lista_Productos.length>0){
    //recorre el array y en cada iten del array llama la funcion dibujar para poder dibujar las filas correspondientes
    lista_Productos.map((prod)=> dibujar_Filas_Productos(prod))
  }
}
//funcion para dibujar las filas de los producto
function dibujar_Filas_Productos(prod){
  let datosTabla = document.getElementById('tabla_Administrador');
  //aqui se dubuja la tabla
 datosTabla.innerHTML+=`
 <tr class="fila-Producto">
 <td class="text-truncate">
   ${prod.nombre}
 </td>
 <td class="text-truncate">
   ${prod.nombre}
 </td>
 <td class="text-truncate">${prod.categoria}</td>
 <td class="text-truncate">
  ${prod.detalle}
 </td>
 <td class=" ">${prod.stock}</td>
 <td class=" ">
   <button
     class="bi bi-pencil-square boton-Editar-Administrador btn"
   ></button>
   <button
     class="bi bi-x-lg boton-Eliminar-Administrador btn"
   ></button>
 </td>
</tr>`
}
//fin del READ
