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

function validarCategoria(texto){
    if(texto.length > 0 && (texto === 'Teclado' || texto  === 'Monitor' || texto === 'Mouse' || texto === 'Fuente' || texto === 'Combo Teclado + Mouse' || texto === 'Memorias Ram' || texto === 'Parlante' || texto === 'Auricular' || texto === 'Disco Duro')){
        console.log('Categoria valida')
        return true;
    }
    else{
        console.log('Categoria invalida')
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


export function conjuntoValidaciones(inputNombre, inputDescripcion, inputImagen, inputCategoria, inputStock, inputPrecio){
    let validacion = '';
    if(!cantidadCaracteres(inputNombre.value,3,100))
    {
        validacion += 'Debes corregir el campo del nombre. Este debe contener entre 3 y 100 caracteres <br>';
    }
    if(!cantidadCaracteres(inputDescripcion.value,10,500))
    {
        validacion += 'Debes corregir la cantidad de caracteres de la descripción. Minimos: 10 caracteres <br>';
    }
    if(inputStock.value.length !== 0 && !validarStock(inputStock.value))
    {
        validacion += 'Debes corregir el stock, debe ser un numero de 3 digitos como maximo <br>';
    }
    if(inputPrecio.value.length !== 0 && !validarPrecio(inputPrecio.value))
    {
        validacion += 'Debes corregir el precio, debe ser un numero de 1 a 6 digitos <br>';
    }
    if(inputImagen.value.length !== 0 && !validarURLImagen(inputImagen.value))
    {
        validacion += 'La URL de la imagen no es valida <br>';
    }
    if(inputCategoria.value.length !== 0 && !validarCategoria(inputCategoria.value))
    {
        validacion += 'La categoría seleccionada no es valida <br>';
    }
    return validacion;
}