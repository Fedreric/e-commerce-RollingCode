const paisesLatinoamerica = ["ARGENTINA","BOLIVIA","BRASIL","CHILE","COLOMBIA","COSTA RICA","CUBA","ECUADOR","EL SALVADOR","GUATEMALA","HAITI","HONDURAS","MEXICO","NICARAGUA","PANAMA","PARAGUAY","PERU","PUERTO RICO","REPUBLICA DOMINICANA","URUGUAY","VENEZUELA"];

function cantidadCaracteres(texto, min, max)
{
    if(texto.length >= min && texto.length <= max)
    {
        return true;
    }else
    {
        return false;
    }
}

function validaCorreo(value)
{
    const expReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(cantidadCaracteres(value, 10, 100) && expReg.test(value))
    {
        return true;
    }else
    {
        return false;
    }
}

//Validacion para que el usuario ingrese un pais de latinoamerica
function validarPais(value) 
{
  const paisMayuscula = value.toUpperCase(); // Convertimos el valor ingresado a mayúscula para compararlo con los países en mayúscula de nuestro array
  if(paisesLatinoamerica.includes(paisMayuscula)) {
    console.log(`El país ${value} pertenece a Latinoamérica`);
    return true;
  } else {
    console.log(`El país ${value} no pertenece a Latinoamérica`);
    return false;
  }
}

function validaNumeros(value, max)
{
    if(value > 0 && value <= max)
    {
        return true;
    }else
    {
        return false;
    }
}

export function sumarioValidaciones(nombUsuario, contrasenia, correo, pais, provincia, localidad, codPostal, calle, alt_calle, pisoDpto, nroDpto)
{
    let resumen = '';
    if(!cantidadCaracteres(nombUsuario,3,100))
    {
        resumen+='->Se ingreso un nombre de usuario no valido.</br>';
    }
    if(!cantidadCaracteres(contrasenia, 6,15))
    {
        resumen+='-> La contraseña ingresada no es valida (debe contener entre 6 y 15 caracteres).</br>';
    }
    if(!validaCorreo(correo))
    {
        resumen+='-> Se ingreso un correo invalido.</br>';
    }
    if(!validarPais(pais))
    {
        resumen+='-> Error en el campo pais. Recuerde que debe encontrarse en Latino América (aqui somos racistas a la inversa :) ).</br>';
    }
    if(!cantidadCaracteres(provincia, 4,50))
    {
        resumen+='-> Error  en el campo provincia.</br>';
    }
    if(!cantidadCaracteres(localidad, 4,50))
    {
        resumen+='-> Error en el campo localidad.</br>'
    }
    if(!cantidadCaracteres(codPostal,4,10))
    {
        resumen+='-> Error en el campo de codigo postal. Asegurese de ingresar correectamente el codigo. </br>';
    }
    if(!cantidadCaracteres(calle, 4,100))
    {
        resumen+='-> Error en el ingreso de la calle.</br>';
    }
    if(!validaNumeros(alt_calle, 50000)) //Segun una investigacion que realice, la calle mas larga de Latino America esta en Mexico y llega hasta la numeracion 50000
    {
        resumen+='-> Se ingreso una numeracion de calle erronea.</br>';
    }
    if( pisoDpto!='' && !validaNumeros(pisoDpto, 64))
    {
        resumen+='-> Error en el campo piso. Se ingreso una numeracion invalida.</br>';
    }
    if(nroDpto!='' && !validaNumeros(nroDpto, 20))
    {
        resumen+='-> Error en el campo de Nro. departamento. Se ingreso una numeracion invalida.</br>';
    }
    if(pisoDpto!='' && nroDpto==='' || pisoDpto==='' && nroDpto!='')
    {
        resumen+='->Error al ingresar el piso y el numero del departamento. Ambos campos deben llenarse.';
    }
    return resumen;
}