import _Producto from "./class-Producto";

function validarProducto(nombre, detalle, imagen, categoria, stock, precio) {
    if (typeof nombre !== "string" || nombre.length < 3) {
      return "El nombre del producto debe ser una cadena de al menos 3 caracteres";
    }
    if (typeof detalle !== "string" || detalle.length < 10) {
      return "El detalle del producto debe ser una cadena de al menos 10 caracteres";
    }
    if (typeof imagen !== "string" || !/^https?:\/\/.+/.test(imagen)) {
      return "La URL de la imagen del producto no es válida";
    }
    if (typeof categoria !== "string" || categoria.length < 3) {
      return "La categoría del producto debe ser una cadena de al menos 3 caracteres";
    }
    if (typeof stock !== "number" || stock < 0) {
      return "El stock del producto debe ser un número mayor o igual a cero";
    }
    if (typeof precio !== "number" || precio <= 0) {
      return "El precio del producto debe ser un número mayor que cero";
    }
  
    
    return null;
  }