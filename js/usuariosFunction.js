import {Usuario} from "./usuariosClase.js";
import {sumarioValidaciones} from './helper.js';

const btnIniciarSecion = document.getElementById('btnIniciarSecion');
btnIniciarSecion.addEventListener('click', mostrarModalLogin);
const modalLogin = new bootstrap.Modal(document.getElementById('inicioSecion'));

const btnRegistrarse = document.getElementById('btnRegistrarse');
btnRegistrarse.addEventListener('click', mostrarModalRegistrarse);
const modalRegistrarse = new bootstrap.Modal(document.getElementById('registro'));

const iframe_RegistroUsuario = document.getElementById('iframe_registroUsuario');
const iframe_RegistroUsuario_contenido = iframe_RegistroUsuario.contentWindow.document;
const form_registroUsuario = iframe_RegistroUsuario_contenido.getElementById('form_registraUsuario');
form_registroUsuario.addEventListener('submit', creaUsuario);

const nombreUsuario = iframe_RegistroUsuario_contenido.getElementById('nombre-registro');
const contrasenia = iframe_RegistroUsuario_contenido.getElementById('contrasenia-Registro');
const correo = iframe_RegistroUsuario_contenido.getElementById('correo-Registro');
const pais = iframe_RegistroUsuario_contenido.getElementById('pais-Registro');
const provincia = iframe_RegistroUsuario_contenido.getElementById('provincia-Registro');
const localidad = iframe_RegistroUsuario_contenido.getElementById('Localidad-Registro');
const codPostal = iframe_RegistroUsuario_contenido.getElementById('codigo-Postal-Registro');
const calle = iframe_RegistroUsuario_contenido.getElementById('calle-Registro');
const altura_calle = iframe_RegistroUsuario_contenido.getElementById('altura-Registro');
const pisoDpto = iframe_RegistroUsuario_contenido.getElementById('pisoDpto-Registro');
const nroDpto = iframe_RegistroUsuario_contenido.getElementById('departamento-Registro');

let listadoUsuarios = localStorage.getItem('listadoUsuarios');

if(!listadoUsuarios)
{
    listadoUsuarios = []; 
    cargaAdministrador(); //Si no hay ningun usuario cargado entonces crea y almacena el usuario admin en localStorage
}else
{
    listadoUsuarios = JSON.parse(listadoUsuarios).map( 
        (usuario) =>
        {
            new Usuario
            (
                usuario.idUsuario,
                usuario.nombreUsuario,
                usuario.contrasenia,
                usuario.email,
                usuario.pais,
                usuario.provincia,
                usuario.localidad,
                usuario.codPostal,
                usuario.direccion,
                usuario.tipo
            )
        }
    );
}

//listadoUsuarios.map((usuario) => console.log(usuario));

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
    modalRegistrarse.show();
}

function cargaAdministrador()
{
    let admin = new Usuario(undefined ,'admin', '1234', 'admin@admin', 'Argentina', 'Tucuman', 'San Miguel de Tucuman', 4000, 'General Paz;576', 'admin');
    listadoUsuarios.push(admin);
    console.log(listadoUsuarios);
    guardaEnLocalStorage();
}

function creaUsuario(e)
{
    e.preventDefault();
    console.log('Se va a crear un nuevo usuario.');
    let resumen = sumarioValidaciones(nombreUsuario.value, contrasenia.value, correo.value, pais.value, provincia.value, localidad.value, codPostal.value, calle.value, altura_calle.value, pisoDpto.value, nroDpto.value);
    if(resumen.length === 0)
    {
        console.log('Se esta ingresando el usuario.');
        let nuevoUsuario = new Usuario(undefined, nombreUsuario.value, contrasenia.value, correo.value, pais.value, provincia.value, localidad.value,codPostal.value, calle.value+';'+altura_calle.value+';'+pisoDpto.value+';'+nroDpto.value, 'usuario');
        listadoUsuarios.push(nuevoUsuario);
        guardaEnLocalStorage(); //Se almacena el nuevo usuario
        limpiarFormularioRegistro();
        modalRegistrarse.hide();
        modalLogin.show();
    }    
}

function guardaEnLocalStorage()
{
    localStorage.setItem('listadoUsuarios', JSON.stringify(listadoUsuarios));
}

function limpiarFormularioRegistro()
{
    form_registroUsuario.reset();
}