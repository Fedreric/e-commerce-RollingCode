export function conjuntoValidaciones(inputNombre, inputDescripcion, inputImagen, inputCategoria, inputStock, inputPrecio) {
    let errores = [];
  
    if (!inputNombre || inputNombre.trim() === "") {
      errores.push("El nombre del producto es obligatorio");
    }
  
    if (!inputDescripcion || inputDescripcion.trim() === "") {
      errores.push("La descripción del producto es obligatoria");
    }
  
    if (!inputImagen || inputImagen.trim() === "") {
      errores.push("La imagen del producto es obligatoria");
    }
  
    if (!inputCategoria || inputCategoria.trim() === "") {
      errores.push("La categoría del producto es obligatoria");
    }
  
    if (isNaN(inputStock) || inputStock <= 0) {
      errores.push("El stock del producto debe ser un número mayor que cero");
    }
  
    if (isNaN(inputPrecio) || inputPrecio <= 0) {
      errores.push("El precio del producto debe ser un número mayor que cero");
    }
  
    return errores;
  }