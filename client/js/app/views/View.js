class View
{
    constructor(elemento)
    {
        this._elemento = elemento
    }

    update(modelo)
    {
        this._elemento.innerHTML = this._template(modelo);
    }
}