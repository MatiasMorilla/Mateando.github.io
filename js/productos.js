class Productos
{
    constructor(id, nombre, stock, precio, img, info)
    {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.stock = parseInt(stock);
        this.precio = parseFloat(precio);
        this.img = img;
        this.info = info;
    }

    restarStock()
    {
        this.stock--;
    }

    restarStockXcantidad(cantidad)
    {
        this.stock -= cantidad;
    }

    toHTML()
    {
        this.innerHTML =
        `<div class="card">
            <h3 class="title">`+ this.nombre +`</h3>
            <img src="`+ this.img +`" alt="Imagen Mate" class="img-card">
            <div class="footer-card">
                <button class="btn btn-card" idProducto="`+ this.id +`" >Agregar</button>
                <span class="price-card">$`+ this.precio +`</span>
            </div>
        </div>`;

        return this.innerHTML;
    }
}

function buscarXid(id)
{
    let product = null;
    for(let i = 0; i < arrayProductos.length; i++)
    {
        if(id == arrayProductos[i].id)
        {
            product = arrayProductos[i];
        }
    }
    return product;
}