export default class Producto {
  #codigo;
  #nombre;
  #detalle;
  #imagen;
  #categoria;
  #stock;
  #precio;

  
  constructor(
    codigo = uuidv4(),
    nombre,
    detalle,
    imagen,
    categoria,
    stock,
    precio
  ) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#detalle = detalle;
    this.#imagen = imagen;
    this.#categoria = categoria;
    this.#stock = stock;
    this.#precio = precio;
  }

  get codigo() {
    return this.#codigo;
  }
  set codigo(codigo) {
    this.#codigo = codigo;
  }

  get nombre() {
    return this.#nombre;
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }

  get detalle() {
    return this.#detalle;
  }
  set detalle(detalle) {
    this.#detalle = detalle;
  }

  get imagen() {
    return this.#imagen;
  }
  set imagen(imagen) {
    this.#imagen = imagen;
  }

  get categoria() {
    return this.#categoria;
  }
  set categoria(categoria) {
    this.#categoria = categoria;
  }

  get stock() {
    return this.#stock;
  }
  set stock(stock) {
    this.#stock = stock;
  }
  get precio() {
    return this.#precio;
  }
  set precio(precio) {
    this.#precio = precio;
  }
  toJSON() {
    return {
      codigo: this.#codigo,
      nombre: this.#nombre,
      detalle: this.#detalle,
      imagen: this.#imagen,
      categoria: this.#categoria,
      stock: this.#stock,
      precio: this.#precio,
    };
  }
}
