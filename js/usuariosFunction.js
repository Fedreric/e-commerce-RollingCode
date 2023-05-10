import { Usuario } from "./usuariosClase.js";
import { sumarioValidaciones, validaSesion } from "./helper.js";

//Boton para iniciar secion
const btnIniciarSecion = document.getElementById("btnIniciarSecion");
btnIniciarSecion.addEventListener("click", mostrarModalLogin);
const modalLogin = new bootstrap.Modal(document.getElementById("inicioSecion"));

const iframe_LoginUsuario = document.getElementById("iframe_loginUsuario");
const iframe_LoginUsuario_contenido =
  iframe_LoginUsuario.contentWindow.document;
const form_LoginUsuario =
  iframe_LoginUsuario_contenido.getElementById("form_loginUsuario");
form_LoginUsuario.addEventListener("submit", iniciaSecion);

const btnRegistrarse = document.getElementById("btnRegistrarse");
btnRegistrarse.addEventListener("click", mostrarModalRegistrarse);
const modalRegistrarse = new bootstrap.Modal(
  document.getElementById("registro")
);

const iframe_RegistroUsuario = document.getElementById(
  "iframe_registroUsuario"
);
const iframe_RegistroUsuario_contenido =
  iframe_RegistroUsuario.contentWindow.document;
const form_registroUsuario = iframe_RegistroUsuario_contenido.getElementById(
  "form_registraUsuario"
);
form_registroUsuario.addEventListener("submit", creaUsuario);

const msj_Error_Login = document.getElementById("msjErrorFormLogin");
const msj_Error_Registro = document.getElementById("msjErrorFormRegistro");
/*Recuperacion de los elementos ingresados en el formulario de login*/
const correoSesion =
  iframe_LoginUsuario_contenido.getElementById("email-usuario");
const contraseniaSesion = iframe_LoginUsuario_contenido.getElementById(
  "contrasenia-usuario"
);

/*Recuperacion de los elemetnos ingresados en el formulario de registro*/
const nombreUsuario =
  iframe_RegistroUsuario_contenido.getElementById("nombre-registro");
const contrasenia = iframe_RegistroUsuario_contenido.getElementById(
  "contrasenia-Registro"
);
const correo =
  iframe_RegistroUsuario_contenido.getElementById("correo-Registro");
const pais = iframe_RegistroUsuario_contenido.getElementById("pais-Registro");
const provincia =
  iframe_RegistroUsuario_contenido.getElementById("provincia-Registro");
const localidad =
  iframe_RegistroUsuario_contenido.getElementById("Localidad-Registro");
const codPostal = iframe_RegistroUsuario_contenido.getElementById(
  "codigo-Postal-Registro"
);
const calle = iframe_RegistroUsuario_contenido.getElementById("calle-Registro");
const altura_calle =
  iframe_RegistroUsuario_contenido.getElementById("altura-Registro");
const pisoDpto =
  iframe_RegistroUsuario_contenido.getElementById("pisoDpto-Registro");
const nroDpto = iframe_RegistroUsuario_contenido.getElementById(
  "departamento-Registro"
);

let listadoUsuarios = localStorage.getItem("listadoUsuarios");

if (!listadoUsuarios) {
  listadoUsuarios = [];
  cargaAdministrador(); //Si no hay ningun usuario cargado entonces crea y almacena el usuario admin en localStorage
  location.reload(); //soluciona un error que no permitia crear una cuenta en primera instancia 
} else {
  listadoUsuarios = JSON.parse(listadoUsuarios).map((usuario) => {
    return new Usuario(
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
    );
  });
}

function mostrarModalLogin() {
  if (btnIniciarSecion.innerHTML === "Ingresar") {
    modalLogin.show();
  } else {
    cerrarSesion();
  }
}

function mostrarModalRegistrarse() {
  modalLogin.hide();
  modalRegistrarse.show();
}

function cargaAdministrador() {
  let admin = new Usuario(
    undefined,
    "admin",
    "1234",
    "admin@admin",
    "Argentina",
    "Tucuman",
    "San Miguel de Tucuman",
    "4000",
    "General Paz;576;;",
    "admin"
  );
  listadoUsuarios.push(admin);

  guardaEnLocalStorage();
}

function creaUsuario(e) {
  e.preventDefault();

  let resumen = sumarioValidaciones(
    nombreUsuario.value,
    contrasenia.value,
    correo.value,
    pais.value,
    provincia.value,
    localidad.value,
    codPostal.value,
    calle.value,
    altura_calle.value,
    pisoDpto.value,
    nroDpto.value
  );
  if (resumen.length === 0) {
    Swal.fire({
      title: "Usuario creado!",
      icon: "success",
      confirmButtonColor: "#6246ea",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if(result.isConfirmed)
      {
        let nuevoUsuario = new Usuario(
          undefined,
          nombreUsuario.value,
          contrasenia.value,
          correo.value,
          pais.value,
          provincia.value,
          localidad.value,
          codPostal.value,
          calle.value +
            ";" +
            altura_calle.value +
            ";" +
            pisoDpto.value +
            ";" +
            nroDpto.value,
          "usuario"
        );
        listadoUsuarios.push(nuevoUsuario);
        guardaEnLocalStorage(); //Se almacena el nuevo usuario
        limpiarFormularioRegistro();
        modalRegistrarse.hide();
        location.reload();
        mostrarModalLogin();  
      }
    })
  } else {
    msj_Error_Registro.className = "alert alert-danger mt-2";
    msj_Error_Registro.innerHTML = resumen;
  }
}

function guardaEnLocalStorage() {
  localStorage.setItem("listadoUsuarios", JSON.stringify(listadoUsuarios));
}

function limpiarFormularioRegistro() {
  form_registroUsuario.reset();
}

function iniciaSecion(e) {
  e.preventDefault();

  let validacionSecion = validaSesion(
    correoSesion.value,
    contraseniaSesion.value
  );

  if (validacionSecion.length === 0) {
    btnIniciarSecion.innerHTML = "Cerrar Sesion";
    modalLogin.hide();
    location.reload();
  } else {
    msj_Error_Login.className = "alert alert-danger mt-2";
    msj_Error_Login.innerHTML = validacionSecion;
    correoSesion.className =
      "form-control-plaintext border border-danger-subtle rounded p-2";
    contraseniaSesion.className =
      "form-control-plaintext border border-danger-subtle rounded p-2";
  }
}

function cerrarSesion() {
  Swal.fire({
    title: "Cerrando sesion.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#6246ea",
    cancelButtonColor: "#e45858",
    confirmButtonText: "Salir",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if(result.isConfirmed)
    {
      sessionStorage.removeItem("user");
      btnIniciarSecion.innerHTML = "Ingresar";
      window.location.href = "../index.html";
    }
  })
}
