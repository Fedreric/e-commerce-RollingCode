const buscador = document.getElementById('buscaArticulo');
buscador.addEventListener('submit', buscarArticulo);
const articuloBusca = document.getElementById('articuloBuscado');
const etiquetas = document.getElementsByTagName('h4');
const modalArticulos = new bootstrap.Modal(document.getElementById('modalArticulo'));
const agregarCardsModales = document.getElementById('agregaCards');

function buscarArticulo(e)
{
    e.preventDefault();
    let buscado = articuloBusca.value;
    let cards = '';
    let verifica = 0;
    agregarCardsModales.innerHTML = cards;
    for(let i = 0; i < etiquetas.length; i++)
    {
        if(etiquetas[i].innerHTML.toLowerCase().includes(buscado))
        {
            cards += creaCardHTML(etiquetas[i].innerHTML);
            verifica++;
        }
    }
    agregarCardsModales.innerHTML = cards;
    buscador.reset();
    if(verifica != 0)
    {
        muestraModal();
    }else
    {
        alert('El articulo solicitado no se encuentra almacenado :( \nIntente nuevamente.');
    }
}

function creaCardHTML(titulo) {
    switch(titulo)
    {
        case 'Actividad fisica':
            return '<div class="card cardInicio mb-1"><img src="./img/ejercicio.jpg" alt="Ejercicio fisico" class="card-img-top img-fluid"><div class="card-body"><h4 class="card-title text-center">Actividad fisica</h4><p class="card-text">Realizar de forma regular y sistemática una actividad física ha demostrado ser una práctica muy beneficiosa en la prevención, desarrollo y rehabilitación de la salud, a la vez que ayuda alcarácter, la disciplina y a la toma de decisiones en la vida cotidiana.</p></div><div class="card-footer"><a href="pages/detalleArticulo1.html" class="btn btn-success rounded-2">Leer mas aqui</a></div></div>'
        case 'Evitar fumar':
            return '<div class="card cardInicio mb-5"><img src="./img/Nofumar.jpg" alt="No fumar" class="card-img-top img-fluid"><div class="card-body"><h4 class="card-title text-center">Evitar fumar</h4><p class="card-text">Dejar de fumar es una de las medidas más importantes que se pueden tomar para mejorar la salud. Esto es cierto independientemente de la edad o el tiempo que se lleve fumando.</p></div><div class="card-footer"><a href="pages/detalleArticulo2.html" class="btn btn-success rounded-2">Leer mas aqui</a></div></div>';
        case 'No tomar mucho alcohol':
            return '<div class="card cardInicio mb-5"><img src="./img/Nobeber.jpg" alt="Cero alcohol" class="card-img-top img-fluid"><div class="card-body"><h4 class="card-title text-center">No tomar mucho alcohol</h4><p class="card-text">El consumo de alcohol está asociado científicamente con patologías y enfermedades a corto y largo plazo, además de problemas de relaciones sociales.</p></div><div class="card-footer"><a href="pages/detalleArticulo3.html" class="btn btn-success rounded-2">Leer mas aqui</a></div></div>';
        case 'Una dieta equilibrada':
            return '<div class="card cardInicio mb-5"><img src="./img/Dieta.jpg" alt="Dieta saludable" class="card-img-top img-fluid"><div class="card-body"><h4 class="card-title text-center">Una dieta equilibrada</h4><p class="card-text">Llevar una dieta equilibrada es fundamental para combatir la obesidad así como otras patologías en la sociedad actual. No se trata de seguir una dieta restrictiva, sino de aportar el organismo todos los nutrientes que necesita para ejercer sus funciones vitales. </p></div><div class="card-footer"><a href="pages/detalleArticulo1.html" class="btn btn-success rounded-2">Leer mas aqui</a></div></div>';
        case 'Dormir bien':
            return '<div class="card cardInicio mb-5"><img src="./img/Dormirbien.jpg" alt="Dormir bien" class="card-img-top img-fluid"><div class="card-body"><h4 class="card-title text-center">Dormir bien</h4><p class="card-text">Dormir bien es clave para poder mantener un estilo de vida saludable y para prevenir diferentes tipos de enfermedades. Además, se trata de una necesidad fisiológica fundamental, ya que el sueño es un estado conductual y fisiológico durante el cual el organismo se recupera. </p></div><div class="card-footer"><a href="pages/detalleArticulo5.html" class="btn btn-success rounded-2">Leer mas aqui</a></div></div>';
    }
}

function muestraModal() 
{
    modalArticulos.show();    
}
