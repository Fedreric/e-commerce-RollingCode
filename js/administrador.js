import Producto from "./class-Producto.js";



const formulario_Administrador = document.getElementById('formAdministrarPelicula');
const input_Codigo = document.getElementById('inputCodigo');
const input_Nombre = document.getElementById('input-Nombre-Articulo');
const input_Descripcion = document.getElementById('input-Descripcion-Articulo');
const input_Imagen = document.getElementById('input-Imagen-Articulo');
const input_Categoria = document.getElementById('input-Categoria-Articulo');
const input_Stock = document.getElementById('input-Stock-Articulo');
const btn_Agregar=document.getElementById('btn-Agregar');
let lista_Productos = JSON.parse(localStorage.getItem('lista_Producto'))|| [];


btn_Agregar.addEventListener('click',mostrar_Modal_Producto);
formulario_Administrador.addEventListener('submit',mostrarDatos);

//funcion que nos permite llamar el modal para poder ser utilizado
const modal_Producto = new bootstrap.Modal(
    document.getElementById("modal-Registro-Productos")
  );

    //fin del la logica de Carga de datos en el local Storage


function mostrar_Modal_Producto() {
    //modalPelicula nos sirve para crear un intancia de un modal desde JS
    modal_Producto.show();   
  }
  
  function mostrarDatos(e){
    e.preventDefault();
    console.log(`nombre: ${input_Nombre.value}`);
    console.log(`desc: ${input_Descripcion.value}`);
    console.log(`img: ${input_Imagen.value}`);
    console.log(`cat: ${input_Categoria.value}`);
    console.log(`STOCK: ${input_Stock.value}`);

    let nuevo_Producto= new Producto(undefined,input_Nombre.value,input_Descripcion.value,input_Imagen.value,input_Categoria.value,input_Stock.value)
    lista_Productos.push(nuevo_Producto);
    guardar_Productos_Local_Storage();
    limpiar_Formulario();
    //cerrar formulario
    modal_Producto.hide();
   
  }
  function guardar_Productos_Local_Storage() {
    localStorage.setItem("lista_Producto", JSON.stringify(lista_Productos));
  }
  function limpiar_Formulario() {
    formulario_Administrador.reset()
  }
  //fin del la logica de Carga de datos en el local Storage


