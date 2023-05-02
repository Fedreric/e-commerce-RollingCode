export default class Producto{
    #codigo
    #nombre
    #detalle
    #imagen
    #categoria
    #stock
    constructor(codigo=uuidv4(),nombre,detalle,imagen,categoria,stock){
        this.#codigo=codigo
        this.#nombre=nombre
        this.#detalle=detalle
        this.#imagen=imagen
        this.#categoria=categoria
        this.#stock=stock
    }

    get codigo(){
        return this.#codigo;
      }
    set codigo(codigo) {
        this.#codigo = codigo;
      }


    get nombre(){
        return this.#nombre;
      }
    set nombre(nombre) {
        this.#nombre = nombre;
      }


    get detalle(){
        return this.#detalle;
      }
    set detalle(detalle) {
        this.#detalle = detalle;
      }


    get imagen(){
        return this.#imagen;
      }
    set imagen(imagen) {
        this.#imagen = imagen;
      }


    get categoria(){
        return this.#categoria;
      }
    set categoria(categoria) {
        this.#categoria = categoria;
      }


    get stock(){
        return this.#stock;
      }
    set stock(stock) {
        this.#stock = stock;
      }
}