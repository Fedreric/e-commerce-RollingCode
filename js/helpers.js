export function conjuntoValidaciones(inputNombre, inputDescripcion, inputImagen, inputCategoria, inputStock, inputPrecio) {
    let errores = [];
  
    if (inputNombre.trim() === '') {
        errores.push('El nombre es requerido');
        document.getElementById('msjNombre').textContent = 'El nombre es requerido';
      } else {
        document.getElementById('msjNombre').textContent = '';
      }
    
      if (inputDescripcion.trim() === '') {
        errores.push('La descripción es requerida');
        document.getElementById('msjDescripcion').textContent = 'La descripción es requerida';
      } else {
        document.getElementById('msjDescripcion').textContent = '';
      }
    
      if (inputImagen.trim() === '') {
        errores.push('La imagen es requerida');
        document.getElementById('msjImagen').textContent = 'La imagen es requerida';
      } else {
        document.getElementById('msjImagen').textContent = '';
      }
    
      if (inputCategoria.trim() === '') {
        errores.push('La categoría es requerida');
        document.getElementById('msjCategoria').textContent = 'La categoría es requerida';
      } else {
        document.getElementById('msjCategoria').textContent = '';
      }
    
      if (isNaN(inputStock) || inputStock < 0) {
        erroresMsj.push('El stock debe ser un número positivo');
      }
      
      if (isNaN(inputPrecio) || inputPrecio <= 0) {
        erroresMsj.push('El precio debe ser un número positivo mayor que cero');
      }
    }

    return erroresMsj