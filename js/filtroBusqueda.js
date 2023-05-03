const barraBusqueda = document.getElementById("buscarProducto")
const inputBusqueda = document.getElementById("buscador")

barraBusqueda.addEventListener("submit", function(e){
    e.preventDefault()

    const resultadoBusqueda = inputBusqueda.value.toLowerCase()

    const productosFiltro = JSON.parse(localStorage.getItem("productos")).filter(producto => {
        const nombreProducto = producto.nombre.toLowerCase()
        return nombreProducto.includes(resultadoBusqueda)
    })

    // aquí puedes hacer algo con los resultados de la búsqueda, como mostrarlos en pantalla
    console.log(productosFiltro)
})

//|| []

