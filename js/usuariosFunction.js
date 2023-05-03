import {Usuario} from "./usuariosClase.js";
const btnIniciarSecion = document.getElementById('btnIniciarSecion');
btnIniciarSecion.addEventListener('click', mostrarModalLogin);
const modalLogin = new bootstrap.Modal(document.getElementById('inicioSecion'));

const btnRegistrarse = document.getElementById('btnRegistrarse');
btnRegistrarse.addEventListener('click', mostrarModalRegistrarse);
const modarRegistrarse = new bootstrap.Modal(document.getElementById('registro'));

const iframe_RegistroUsuario = document.getElementById('iframe_registroUsuario');
const iframe_RegistroUsuario_contenido = iframe_RegistroUsuario.contentWindow.document;
const form_registroUsuario = iframe_RegistroUsuario_contenido.getElementById('form_registraUsuario');
form_registroUsuario.addEventListener('submit', creaUsuario);

const nombreUsuario = iframe_RegistroUsuario_contenido.getElementById('nombre-registro');
const contrasenia = iframe_RegistroUsuario_contenido.getElementById('contrasenia-Registro');
const correo = iframe_RegistroUsuario_contenido.getElementById('correo-Registro');
const pais = iframe_RegistroUsuario_contenido.getElementById('pais-Registro');
/*
iframe_RegistroUsuario.addEventListener('load' ,function(){
    console.log('se va a ingresar un nuevo usuario');
    // Acceder al contenido del iframe
    const iframe_RegistroUsuario_contenido = iframe_RegistroUsuario.contentWindow.document;

    // Acceder al formulario dentro del iframe
    const form_registroUsuario = iframe_RegistroUsuario_contenido.getElementById('form_registraUsuario');

    // Agregar event listener para capturar el evento submit
    form_registroUsuario.addEventListener('submit', creaUsuario);
})*/

function mostrarModalLogin()
{
    console.log('muestra modal login');
    modalLogin.show();
}

function mostrarModalRegistrarse()
{
    console.log('muestra modal registro');
    modalLogin.hide();
    modarRegistrarse.show();
}

function creaUsuario(e)
{
    e.preventDefault();
    console.log('Se va a crear un nuevo usuario.');
}