export class Usuario
{
    #idUsuario;
    #userName;
    #email;
    #direccion;
    #contrasenia;
    #tipo;
    constructor(idUsuario = uuidv4(), userName, email, direccion, contrasenia, tipo)
    {
        this.#idUsuario = idUsuario;
        this.#userName = userName;
        this.#email = email;
        this.#direccion = direccion;
        this.#contrasenia = contrasenia;
        this.#tipo = tipo;
    }
    //Metodos getter y setter
    get idUsuario()
    {
        return this.#idUsuario;
    }

    get userName()
    {
        return this.#userName;
    }

    set userName(value)
    {
        this.#userName = value;
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

    set contrasenia(value)
    {
        this.#contrasenia = value;
    }

    get tipo()
    {
        return this.#tipo;
    }

    set tipo(value)
    {
        this.#tipo = value;
    }

    toJSON()
    {
        return {
            idUsuario: this.idUsuario,
            userName: this.userName,
            email: this.email,
            direccion: this.direccion,
            contrasenia: this.contrasenia,
            tipo: this.tipo
        };
    }
}