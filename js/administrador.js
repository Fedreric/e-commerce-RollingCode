//como utilizar codigo de otro archivo JS en un archivo nuevo

import Producto from "./class-Producto.js";
//se agrega la llaves ya que no lleva el export default


const formulario_Administrador = document.getElementById('formAdministrarPelicula');
//const input_Codigo = document.getElementById('inputCodigo');
const input_Nombre = document.getElementById('input-Nombre-Articulo');
const input_Descripcion = document.getElementById('input-Descripcion-Articulo');
const input_Imagen = document.getElementById('input-Imagen-Articulo');
const input_Categoria = document.getElementById('input-Categoria-Articulo');
const input_Stock = document.getElementById('input-Stock-Articulo');
const btn_enviar=document.getElementById('btn-Enviar-Formulario');
const btn_Agregar=document.getElementById('btn-Agregar');
let lista_Productos = JSON.parse(localStorage.getItem('lista_Producto'))|| [];

let pelicula=new Producto(undefined,'martin','sdasdasadsda','dassdasad','das',123);
console.log(pelicula);


btn_Agregar.addEventListener('click',mostrar_Modal_Producto);
formulario_Administrador.addEventListener('submit',mostrarDatos);

//funcion que nos permite llamar el modal para poder ser utilizado
const modalProducto = new bootstrap.Modal(
    document.getElementById("modal-Registro-Productos")
  );

function mostrar_Modal_Producto() {
    formulario_Administrador.reset()
    //modalPelicula nos sirve para crear un intancia de un modal desde JS
    modalProducto.show();
   
  }
  function mostrarDatos(){
    console.log(`nombre: ${input_Nombre.value}`);
  }


