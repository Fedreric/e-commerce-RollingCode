const enlaceCompleto = window.location.href;
const nombArchivo = enlaceCompleto.substring(enlaceCompleto.lastIndexOf('/')+1);
const usuario = JSON.parse(sessionStorage.getItem('user'));

const contenedorCarritoCompras = document.getElementById('carrito');
const contenedorListaDeseados = document.getElementById('contenedorDeseados');
const contenedorEnlaceAdministrador = document.getElementById('contenedorAdministrador');
const inicioLogout = document.getElementById('btnIniciarSecion');
verificaUsuario();
//nombArchivo === 'index.html' || nombArchivo === 'sobreNosotros.html' || nombArchivo === 'error404.html' || nombArchivo === 'detalle.html'

function verificaUsuario()
{
    if(!usuario)
    {
        contenedorCarritoCompras.className = 'd-none';
        contenedorListaDeseados.className = 'd-none';
        contenedorEnlaceAdministrador.className = 'd-none';
        if(nombArchivo === 'administrador.html' || nombArchivo === 'carritoCompras.html')
        {
            let main = document.querySelector('main');
            //console.log(main.firstChild);
            //Elimino todos los elementos del main de la pagina
            while(main.firstChild)
            {
                main.removeChild(main.firstChild);
            }
            let contenedorMensaje = document.createElement('div');
            let mensajeError = document.createElement('p');
            mensajeError.innerHTML = 'No cuentas con los permisos suficientes para poder acceder a esta pagina. Se te redireccionara a la pagina inicial.';
            mensajeError.className = 'fs-4 fw-bold text-danger';
            contenedorMensaje.appendChild(mensajeError);
            contenedorMensaje.className = 'container p-2 rounded border border-danger text-center mt-5';
            main.appendChild(contenedorMensaje);
            setTimeout(()=>{window.location.href = '../index.html';},3000);
        }
    }else if(usuario && usuario.tipo != 'admin')
    {
        inicioLogout.innerHTML = 'Cerrar Sesion';
        contenedorEnlaceAdministrador.className = 'd-none';
        if(nombArchivo === 'administrador.html')
        {
            let main = document.querySelector('main');
            //console.log(main.firstChild);
            //Elimino todos los elementos del main de la pagina
            while(main.firstChild)
            {
                main.removeChild(main.firstChild);
            }
            let contenedorMensaje = document.createElement('div');
            let mensajeError = document.createElement('p');
            mensajeError.innerHTML = 'No cuentas con los permisos suficientes para poder acceder a esta pagina. Se te redireccionara a la pagina inicial.';
            mensajeError.className = 'fs-4 fw-bold text-danger';
            contenedorMensaje.appendChild(mensajeError);
            contenedorMensaje.className = 'container p-2 rounded border border-danger text-center mt-5';
            main.appendChild(contenedorMensaje);
            setTimeout(()=>{window.location.href = '../index.html';},3000);
        }
    }else
    {
        inicioLogout.innerHTML = 'Cerrar Sesion';
    }
    //console.log(nombArchivo);
}
