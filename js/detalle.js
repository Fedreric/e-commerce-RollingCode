//extraer el codigo del producto del url
const codigoProd = new URLSearchParams(window.location.search);
const modalLogin = new bootstrap.Modal(document.getElementById("inicioSecion"));
//buscar producto
let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito/"+usuario.nombreUsuario)) || [];
const producto = listaProductos.find(
  (prod) => prod.codigo === codigoProd.get("codigo")
);
//mostrar los datos del producto
const detalle = document.getElementById("contenedorDetalle");
let contadorCarrito = document.getElementById("contadorCarrito");
const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");
const agotado = document.getElementById("stock");
//variables comentario
const formularioComentairo = document.getElementById("formularioComentario");
const inputNombre = document.getElementById("nameComentario");
const inputComentario = document.getElementById("comentario");

let listaComentario = JSON.parse(localStorage.getItem("listaComentario")) || [];
let date = new Date().toDateString();
let horas = new Date();
let horaActual =
  horas.getHours() + " : " + horas.getMinutes() + " : " + horas.getSeconds();

formularioComentairo.addEventListener("submit", cargaComentario);

readDetalle();
contadorCarritoAct();
function readDetalle() {
  if (parseInt(producto.stock) === 0) {
    detalle.innerHTML = `        
    <aside class="col-md-6">
        <img
            src="${producto.imagen}"
            alt="${producto.categoria}, ${producto.nombre}"
            class="w-100 opacity-75"
        />
    </aside>
    <aside class="col-md-6">
        <h1>${producto.categoria} - ${producto.nombre}</h1>
        <hr />
        <p>
            ${producto.detalle}
        </p>
        <div class="my-3">
            <span class="precio-poducto">$${producto.precio}</span>
        </div>
        <button class="boton text-light my-3 btn-deshabilitado" onClick="agregarCarrito()" id="btnAgregarCarrito">Agregar al carrito</button>
        <span class="stock" id="stock">AGOTADO!</span>
    </aside> 
    `;
  } else {
    detalle.innerHTML = `        
    <aside class="col-md-6">
        <img
            src="${producto.imagen}"
            alt="${producto.categoria}, ${producto.nombre}"
            class="w-100"
        />
    </aside>
    <aside class="col-md-6">
        <h1>${producto.categoria} - ${producto.nombre}</h1>
        <hr />
        <p>
            ${producto.detalle}
        </p>
        <div class="my-3">
            <span class="precio-poducto">$${producto.precio}</span>
        </div>
        <button class="boton text-light my-3"onClick="agregarCarrito()" id="btnAgregarCarrito">Agregar al carrito</button>
        <span class="stock" id="stock">Stock: ${producto.stock}</span>
    </aside> 
    `;
  }
}

function agregarCarrito() {
  let productoStock = parseInt(producto.stock);
  //confirma que haya productos en el stock y recien carga el prod al carrito
  if (productoStock > 0) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: 'Listo <i class="bi bi-cart"></i>',
      showConfirmButton: false,
      timer: 1500,
    });
    listaCarrito.push(producto);
    agregarProductoCarritoLocalStorage();
    //se resta en uno el stock
    producto.stock = productoStock - 1;
    //se guarda el nuevo valor en el local storage
    localStorage.setItem("listaProductos", JSON.stringify(listaProductos));
    readDetalle();
    contadorCarritoAct();
  }
}

function agregarProductoCarritoLocalStorage() {
  let usuario = JSON.parse(verificaUsuarioEnSesion());
  if(usuario)
  {
    localStorage.setItem("listaCarrito/"+usuario.nombreUsuario, JSON.stringify(listaCarrito));
  }else
  {
    Swal.fire({
      title: "Debe iniciar sesion antes de agregar productos al carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6246ea",
      cancelButtonColor: "#e45858",
      confirmButtonText: "Iniciar Sesion.",
      cancelButtonText: "Cancelar.",
    }).then((result) => {
      if(result.isConfirmed)
      {
        modalLogin.show();
      }
    })
  }
}

//modifica el span en el maquetado con la cantidad de productos cargados en el carrito
function contadorCarritoAct() {
  contadorCarrito.innerText = listaCarrito.length;
}

// logica comentarios

class Cometarios {
  constructor(nombre, codigo, comentario, fecha, hora) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.comentario = comentario;
    this.fecha = fecha;
    this.hora = hora;
  }
}

cargaDeDatosInicial();
function cargaComentario(e) {
  e.preventDefault();
  let usuario = JSON.parse(verificaUsuarioEnSesion());
  if(usuario)
  {
    crearComentario();
  }else
  {
    Swal.fire({
      title: "Debe iniciar sesion antes de agregar una consulta a cerca del producto.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6246ea",
      cancelButtonColor: "#e45858",
      confirmButtonText: "Iniciar Sesion.",
      cancelButtonText: "Cancelar.",
    }).then((result) => {
      if(result.isConfirmed)
      {
        modalLogin.show();
      }
    })
  }
  
}
function cargarComentariosLocalStorage() {
  localStorage.setItem("listaComentario", JSON.stringify(listaComentario));
}
function limpiarFormulario() {
  formularioComentairo.reset();
}

function crearComentario() {
  if(inputNombre.value!='' && inputComentario.value!=''){
  let nuevoComentario = new Cometarios(
    inputNombre.value,
    codigoProd.get("codigo"),
    inputComentario.value,
    date,
    horaActual
  );
  listaComentario.push(nuevoComentario);
  cargarComentariosLocalStorage();
  limpiarFormulario();

  dibujarComentarios(nuevoComentario);
}
}

function cargaDeDatosInicial() {
  if (listaComentario.length > 0) {
    //recorre el array y en cada iten del array llama la funcion dibujar para poder dibujar las filas correspondientes
    {
      listaComentario.map((coment) => {
        if (coment.codigo == codigoProd.get("codigo")) {
          dibujarComentarios(coment);
        }
      });
    }
  }
}
//funcion para dibujar las filas de los producto
function dibujarComentarios(coment) {
  let datosComentarios = document.getElementById("contenedorComentarios");
  //aqui se dibuja la tabla

  datosComentarios.innerHTML += `<hr><div class="comentario my-1 m-5">
      <h6 class="m-0 p-0"> ${coment.nombre}</h6>
      <p class="m-0 p-0 fst-italic ">
      ${coment.hora} ${coment.fecha} 
      </p>
      <p class="m-0 mt-2 p-0">
        ${coment.comentario}
      </p>
    </div>
     `;
}

function verificaUsuarioEnSesion()
{
  let usuario = sessionStorage.getItem('user');
  return usuario;
}