export function cantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    return false;
  }
}

function validarURLImagen(value) {
  let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp)$/;
  if (patron.test(value)) {
    return true;
  } else {
    return false;
  }
}
function validarStock(value) {
  let patron = /^[0-9]{1,3}$/;
  if (patron.test(value)) {
    return true;
  } else {
    return false;
  }
}


function validarCategoria(texto) {
  if (
    texto.length > 0 &&
    (texto === "Teclado" ||
      texto === "Monitor" ||
      texto === "Mouse" ||
      texto === "Fuente" ||
      texto === "Combo" ||
      texto === "Memorias Ram" ||
      texto === "Parlante" ||
      texto === "Auricular" ||
      texto === "Discos-Duros")
  ) {
    return true;
  } else {
    return false;
  }
}

function validarPrecio(value) {
  let patron = /^[0-9]{1,6}$/;
  if (patron.test(value)) {
    return true;
  } else {
    return false;
  }
}

export function conjuntoValidaciones(
  inputNombre,
  inputDescripcion,
  inputImagen,
  inputCategoria,
  inputStock,
  inputPrecio
) {
  let validacion = "";
  if (!cantidadCaracteres(inputNombre.value, 3, 100)) {
    inputNombre.classList.add("is-invalid");
    inputNombre.classList.remove("is-valid");
    validacion +=
      "Debes corregir el campo del nombre. Este debe contener entre 3 y 100 caracteres <br>";
  } else {
    inputNombre.classList.add("is-valid");
    inputNombre.classList.remove("is-invalid");
  }
  if (!cantidadCaracteres(inputDescripcion.value, 10, 500)) {
    inputDescripcion.classList.add("is-invalid");
    inputDescripcion.classList.remove("is-valid");
    validacion +=
      "Debes corregir la cantidad de caracteres de la descripción. Minimos: 10 caracteres <br>";
  } else {
    inputDescripcion.classList.add("is-valid");
    inputDescripcion.classList.remove("is-invalid");
  }
  if (inputStock.value.length !== 0 && !validarStock(inputStock.value)) {
    inputStock.classList.add("is-invalid");
    inputStock.classList.remove("is-valid");
    validacion +=
      "Debes corregir el stock, debe ser un numero de 3 digitos como maximo <br>";
  } else {
    inputStock.classList.add("is-valid");
    inputStock.classList.remove("is-invalid");
  }
  if (inputPrecio.value.length !== 0 && !validarPrecio(inputPrecio.value)) {
    inputPrecio.classList.add("is-invalid");
    inputPrecio.classList.remove("is-valid");
    validacion +=
      "Debes corregir el precio, debe ser un numero de 1 a 6 digitos <br>";
  } else {
    inputPrecio.classList.add("is-valid");
    inputPrecio.classList.remove("is-invalid");
  }
  if (inputImagen.value.length !== 0 && !validarURLImagen(inputImagen.value)) {
    inputImagen.classList.add("is-invalid");
    inputImagen.classList.remove("is-valid");
    validacion += "La URL de la imagen no es valida <br>";
  } else {
    inputImagen.classList.add("is-valid");
    inputImagen.classList.remove("is-invalid");
  }
  if (
    inputCategoria.value.length !== 0 &&
    !validarCategoria(inputCategoria.value)
  ) {
    inputCategoria.classList.add("is-invalid");
    inputCategoria.classList.remove("is-valid");
    validacion += "La categoría seleccionada no es valida <br>";
  } else {
    inputCategoria.classList.add("is-valid");
    inputCategoria.classList.remove("is-invalid");
  }
  return validacion;
}
