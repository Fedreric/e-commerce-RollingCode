export function cantidadCaracteres(texto,min,max){
    if(texto.length >= min && texto.length <= max)
    {
        console.log('Cantidad de caracteres correcto');
        return true;
    }else{
        console.log('Cantidad de caracteres incorrecto');
        return false;
    }
}


function validarURLImagen(value){
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp)$/
    if(patron.test(value)){
        console.log('Url valida');
        return true;
    }else{
        console.log('Url invalida');
        return false;
    }
}

function validarStock(value){
    let patron = /^[0-9]{1,3}$/;
    if(patron.test(value))
    {
        console.log('Digito valido de 1 a 3 caracteres');
        return true;
    }
    else{
        console.log('Numero de digitos invalido')
        return false;
    }
}


function validarPrecio(value){
    let patron = /^[0-9]{1,6}$/;
    if(patron.test(value))
    {
        console.log('Digito valido de 1 a 6 caracteres');
        return true;
    }
    else{
        console.log('Numero de digitos invalido')
        return false;
    }
}


export function conjuntoValidaciones(nombre,descripcion,imagen,categoria,stock,precio){
    let validacion = '';
    if(!cantidadCaracteres(nombre,3,100))
    {
        validacion += 'Debes corregir el campo del nombre. Este debe contener entre 3 y 100 caracteres <br>';
    }
    if(!cantidadCaracteres(descripcion,10,500))
    {
        validacion += 'Corregir la cantidad de caracteres de la descripción <br>';
    }
    if(stock.length !== 0 && !validarStock(stock))
    {
        validacion += 'Corregir el stock, debe ser un numero de 3 digitos como maximo <br>';
    }
    if(precio.length !== 0 && !validarPrecio(precio))
    {
        validacion += 'Corregir el precio, debe ser un numero de 6 digitos como maximo <br>';
    }
    if(!validarURLImagen(imagen))
    {
        validacion += 'Corregir la URL de la imagen, la extension debe ser .jpg, .gif, .png o .webp <br>';
    }
    if(!validarCategoria(categoria)){
        validacion += 'Seleccione un categoria de la lista de opciones de productos <br>'
    }
    
    if(validacion.length !== 0){
        return validacion;
    }else{
        console.log('El formulario es correcto');
        return '';
    }
}