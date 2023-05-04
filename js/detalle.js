//extraer el parametro
const codigoProd = new URLSearchParams(window.location.search);
console.log(codigoProd.get('codigo'));
//buscar la pelicula 
// let listaPeliculas = JSON.parse(localStorage.getItem('ListaPeliculas')) || [];
// console.log(listaPeliculas);
// const peliBuscada = listaPeliculas.find(pelicula => pelicula.codigo === parametroCodigo.get('codigo'));
// console.log(peliBuscada);
// //mostrar los datos de la peli
// const detalle = document.getElementById('contenedorDetalle');

// detalle.innerHTML = ` <div class="card mb-3">
// <div class="row g-0">
//   <div class="col-md-4">
//     <img src="${peliBuscada.imagen}" class="img-fluid rounded-start" alt="${peliBuscada.imagen}">
//   </div>
//   <div class="col-md-8">
//     <div class="card-body">
//       <h5 class="card-title">${peliBuscada.titulo}</h5>
//       <p class="card-text">${peliBuscada.descripcion}</p>
//       <p class="card-text">Genero: ${peliBuscada.genero}</p>
//       <p class="card-text">Año: ${peliBuscada.anio}</p>
//       <p class="card-text">Duración: ${peliBuscada.duracion}</p>
//       <p class="card-text">País: ${peliBuscada.pais}</p>
//       <p class="card-text">Reparto: ${peliBuscada.reparto}</p>
//       <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
// </div>
// </div>`