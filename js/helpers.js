export function cantidadCaracteres(texto,min,max){
    if(texto.length >= min && texto.length <= max)
    {
        console.log('cantidad de caracteres correcto');
        return true;
    }else{
        console.log('cantidad de caracteres incorrecto');
        return false;
    }
}


function validarURLImagen(value){
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp)$/
    if(patron.test(value)){
        console.log('url valida');
        return true;
    }else{
        console.log('url invalida');
        return false;
    }
}

function validarStock(value){
    let patron = /^[0-9]{1,3}$/;
    if(patron.test(value))
    {
        console.log('digito valido de 1 a 3 caracteres');
        return true;
    }
    else{
        console.log('no paso la expresion regular del tiempo')
        return false;
    }
}


function validarPrecio(value){
    let patron = /^[0-9]{1,6}$/;
    if(patron.test(value))
    {
        console.log('digito valido de 1 a 3 caracteres');
        return true;
    }
    else{
        console.log('no paso la expresion regular del tiempo')
        return false;
    }
}


export function sumarioValidaciones(nombre,descripcion,imagen,categoria,stock,precio){
    let resumen = '';
    if(!cantidadCaracteres(nombre,3,100))
    {
        resumen += 'Debes corregir el campo del nombre. Este debe contener entre 3 y 100 caracteres <br>';
    }
    if(!cantidadCaracteres(descripcion,10,500))
    {
        resumen += 'Corregir la cantidad de caracteres de la descripción <br>';
    }
    if(stock.length !== 0 && !validarStock(stock))
    {
        resumen += 'Corregir el stock, debe ser un numero de 3 digitos como maximo <br>';
    }
    if(precio.length !== 0 && !validarPrecio(precio))
    {
        resumen += 'Corregir la stock, debe ser un numero de 6 digitos como maximo <br>';
    }
    if(!validarURLImagen(imagen))
    {
        resumen += 'Corregir la URL de la imagen, la extension debe ser .jpg, .gif, .png o .webp <br>';
    }
    if(!validarCategoria(categoria)){
        resumen += 'Seleccione un Categoria de la lista de opciones <br>'
    }
    
    if(resumen.length !== 0){
        return resumen;
    }else{
        console.log('todo esta ok con el formulario');
        return '';
    }
}