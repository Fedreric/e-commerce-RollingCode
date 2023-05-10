import { Usuario } from "./usuariosClase.js";
const paisesLatinoamerica = [
  "ARGENTINA",
  "BOLIVIA",
  "BRASIL",
  "CHILE",
  "COLOMBIA",
  "COSTA RICA",
  "CUBA",
  "ECUADOR",
  "EL SALVADOR",
  "GUATEMALA",
  "HAITI",
  "HONDURAS",
  "MEXICO",
  "NICARAGUA",
  "PANAMA",
  "PARAGUAY",
  "PERU",
  "PUERTO RICO",
  "REPUBLICA DOMINICANA",
  "URUGUAY",
  "VENEZUELA",
];


let usuariosAlmacenados = localStorage.getItem("listadoUsuarios");
//Realizo la carga de los usuarios almacenados
if (usuariosAlmacenados) {
  usuariosAlmacenados = JSON.parse(usuariosAlmacenados).map((usuario) => {
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

function cantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    return false;
  }
}

function validaCorreo(value) {
  const expReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (cantidadCaracteres(value, 10, 100) && expReg.test(value)) {
    return true;
  } else {
    return false;
  }
}

//Validacion para que el usuario ingrese un pais de latinoamerica
function validarPais(value) {
  const paisMayuscula = value.toUpperCase(); // Convertimos el valor ingresado a mayúscula para compararlo con los países en mayúscula de nuestro array
  if (paisesLatinoamerica.includes(paisMayuscula)) {
    console.log(`El país ${value} pertenece a Latinoamérica`);
    return true;
  } else {
    console.log(`El país ${value} no pertenece a Latinoamérica`);
    return false;
  }
}

function validaNumeros(value, max) {
  if (value > 0 && value <= max) {
    return true;
  } else {
    return false;
  }
}

function validaContrasenia(value) {
  const expReg = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
  if (expReg.test(value)) {
    return true;
  } else {
    console.log(value);
    return false;
  }
}

function existeUsuario(value) {
  for (let i = 0; i < usuariosAlmacenados.length; i++) {
    if (usuariosAlmacenados[i].nombreUsuario === value) {
      return true;
    }
  }
  return false;
}

function existeCorreo(value) {
  for (let i = 0; i < usuariosAlmacenados.length; i++) {
    if (usuariosAlmacenados[i].email === value) {
      return true;
    }
  }
  return false;
}

export function sumarioValidaciones(
  nombUsuario,
  contrasenia,
  correo,
  pais,
  provincia,
  localidad,
  codPostal,
  calle,
  alt_calle,
  pisoDpto,
  nroDpto
) {
  let resumen = "";
  if (!cantidadCaracteres(nombUsuario, 3, 100)) {
    resumen += "-> Se ingreso un nombre de usuario inválido.</br>";
  } else if (existeUsuario(nombUsuario)) {
    resumen += "-> El nombre de usuario ingresado ya esta en uso.</br>";
  }
  if (!validaContrasenia(contrasenia)) {
    resumen +=
      "-> La contraseña ingresada no es valida (Debe contener al menos 1 mayuscula, 1 caracter especial, 1 número).</br>";
  }
  if (!validaCorreo(correo)) {
    resumen += "-> Se ingreso un correo inválido.</br>";
  } else if (existeCorreo(correo)) {
    resumen += "-> El correo ingresado ya esta en uso por otro usuario.</br>";
  }
  if (!validarPais(pais)) {
    resumen +=
      "-> Error en el campo Pais. Recuerde que debe encontrarse en Latino América.</br>";
  }
  if (!cantidadCaracteres(provincia, 4, 50)) {
    resumen += "-> Error en el campo Provincia.</br>";
  }
  if (!cantidadCaracteres(localidad, 4, 50)) {
    resumen += "-> Error en el campo Localidad.</br>";
  }
  if (!cantidadCaracteres(codPostal, 4, 10)) {
    resumen +=
      "-> Error en el campo Codigo Postal. Asegurese de ingresar correctamente el código. </br>";
  }
  if (!cantidadCaracteres(calle, 4, 100)) {
    resumen += "-> Error en el campo Calle.</br>";
  }
  if (!validaNumeros(alt_calle, 50000)) {
    //Segun una investigacion que realice, la calle mas larga de Latino America esta en Mexico y llega hasta la numeracion 50000
    resumen += "-> Se ingreso una numeración erronea.</br>";
  }
  if (pisoDpto != "" && !validaNumeros(pisoDpto, 64)) {
    resumen +=
      "-> Error en el campo Piso. Se ingreso una numeración inválida.</br>";
  }
  if (nroDpto != "" && !validaNumeros(nroDpto, 20)) {
    resumen +=
      "-> Error en el campo Nro. de Departamento. Se ingreso una numeración inválida.</br>";
  }
  if (
    (pisoDpto != "" && nroDpto === "") ||
    (pisoDpto === "" && nroDpto != "")
  ) {
    resumen +=
      "-> Error deben completarse los campos Piso y Departamento";
  }
  return resumen;
}

export function validaSesion(value, contrasenia) {
  let resumen = "";
  if (!existeUsuario(value) && !existeCorreo(value)) {
    resumen +=
      "El usuario " + value + " no se encuentra registrado en la página.";
  } else {
    let buscoUsuario = usuariosAlmacenados.find((usuario) => {
      if (usuario.nombreUsuario === value || usuario.email === value) {
        return usuario;
      }
    });

    if (buscoUsuario.contrasenia != contrasenia) {
      resumen += "Error al ingresar el correo/Usuario o la contraseña.";
    } else {
      //Se almacena el usuario ingresado en el sessionstorage

      sessionStorage.setItem("user", JSON.stringify(buscoUsuario));
      return resumen;
    }
  }
  return resumen;
}
