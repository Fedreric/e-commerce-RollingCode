export class Usuario
{
    #idUsuario;
    #nombreUsuario;
    #contrasenia;
    #email;
    #pais;
    #provincia;
    #localidad;
    #codPostal;
    #direccion;
    #tipo;
    constructor(idUsuario = uuidv4(), nombreUsuario, contrasenia, email, pais, provincia, localidad, codPostal, direccion, tipo)
    {
        this.#idUsuario = idUsuario;
        this.#nombreUsuario = nombreUsuario;
        this.#email = email;
        this.#direccion = direccion;
        this.#contrasenia = contrasenia;
        this.#tipo = tipo;
        this.#pais = pais;
        this.#provincia = provincia;
        this.#localidad = localidad;
        this.#codPostal = codPostal;
    }
    //Metodos getter y setter
    get idUsuario()
    {
        return this.#idUsuario;
    }

    get nombreUsuario()
    {
        return this.#nombreUsuario;
    }

    set nombreUsuario(value)
    {
        this.#nombreUsuario = value;
    }

    get email()
    {
        return this.#email;
    }

    set email(value)
    {
        this.#email = value;
    }

    get direccion()
    {
        return this.#direccion;
    }

    set direccion(value)
    {
        this.#direccion = value;
    }

    get contrasenia()
    {
        return this.#contrasenia;
    }

    set contrasenia(value)
    {
        return this.#contrasenia = value;
    }

    get tipo()
    {
        return this.#tipo;
    }

    set tipo(value)
    {
        this.#tipo = value;
    }

    get pais()
    {
        return this.#pais;
    }
    
    set pais(value)
    {
        this.#pais = value;
    }

    get provincia()
    {
        return this.#provincia;
    }

    set provincia(value)
    {
        this.#provincia = value;
    }

    get localidad()
    {
        return this.#localidad;
    }

    set localidad(value)
    {
        this.#localidad = value;
    }

    get codPostal()
    {
        return this.#codPostal;
    }

    set codPostal(value)
    {
        this.#codPostal = value;
    }

    toJSON()
    {
        return {
            idUsuario: this.idUsuario,
            nombreUsuario: this.nombreUsuario,
            contrasenia: this.contrasenia,
            email: this.email,
            pais: this.pais,
            provincia: this.provincia,
            localidad: this.localidad,
            codPostal: this.codPostal,
            direccion: this.direccion,
            tipo: this.tipo
        };
    }
}