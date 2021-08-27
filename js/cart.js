class Cart
{
    constructor()
    {
        this.productos = [];
        this.cantidad = [];
        this.total = 0;
    }

    existeProducto(producto)
    {
        let pos = -1;

        for(let i = 0; i < this.productos.length; i++)
        {
            if(producto.nombre == this.productos[i].nombre)
            {
                pos = i;
            }
        }

        return pos;
    }

    agregar(producto)
    {
        let pos = this.existeProducto(producto);

        if(pos != -1)
        {
            this.cantidad[pos]++;
        }
        else
        {
            this.productos.push(producto);
            this.cantidad.push(1);
        }
    }

    eliminar(producto)
    {
        let pos = this.existeProducto(producto);

        if(pos != -1)
        {
            if(this.cantidad[pos] > 1)
            {
                this.cantidad[pos]--;
            }
            else
            {
                this.productos.splice(pos, 1);
                this.cantidad.splice(pos, 1);
            }
        }
    }

    calcularTotal()
    {
        let total = 0;

        if(this.productos.length > 0)
        {
            for(let i = 0; i < this.productos.length; i++)
            {
                total += this.productos[i].precio * this.cantidad[i];
            }
        }

        return total;
    }

    toHTML()
    {
        let divArray = [];

        for(let i = 0; i < this.productos.length; i++)
        {
            let div = document.createElement("div");
            div.className = "product"
            div.innerHTML =
            `<div class="img-product">
                <img src="`+ this.productos[i].img +`" alt="`+ this.productos[i].nombre +`">
            </div>
            <div class="info-product">
                <h4 class="name">`+ this.productos[i].nombre +`</h4>
                <span class="price">$`+ this.productos[i].precio +`</span>
            </div>
            <div class="cant-product">
                <span class="cant">`+ this.cantidad[i] +`</span>
            </div>
            <div class="cancel-container">
                <button class="btn-cancel" idProducto="`+ this.productos[i].id +`"><i class="far fa-times-circle"></i></button>
            </div>`

            div.querySelector(".btn-cancel").addEventListener("click", addDeleteEvent)

            divArray.push(div);
        }

        return divArray;
    }
}


const cart = new Cart();

const btn_cart = document.querySelector("#btn-cart"); // Obtenemos el boton para abrir el carrito
const cart_container = document.querySelector(".cart-container-product"); // Obtenemos el container del carrito
const carrito = document.querySelector(".cart"); // Obtenemos el carrito donde se agregan los productos
const cart_items = document.querySelectorAll(".product"); // Obtenemos los productos del carrito
const card = document.querySelectorAll(".card"); // Obtenemos las tarjetas de los productos (La del catalogo)
const btn_card = document.querySelectorAll(".btn-card"); // Obtenemos todos los botones de las tarjetas


const cartToHTML = function(cart)
{
    let divArray = cart.toHTML();
    carrito.innerHTML = "";

    for(const div of divArray)
    {
        carrito.appendChild(div);
    }
}

// oculta o hace aparecer el carrito
btn_cart.addEventListener("click", function(){
    cart_container.classList.toggle("cart-hidden");
    
})

// Si se hace click en algun boton de "Agregar" se agrega el producto al carrito, se suma el total de la compra y se enumeran los elementos en el carrtio
btn_card.forEach(function(e)
{
    e.addEventListener("click", function(){
        let cart_items = document.querySelectorAll(".product");
        let btn_cart = document.querySelector("#btn-cart");
        
        let p = buscarXid(e.getAttribute("idProducto"));
        cart.agregar(p);
        cartToHTML(cart);


        //ENUMERO LOS PRODUCTOS CON EL ATRIBUTO CANT
        cart_items = document.querySelectorAll(".product");

        if(cart_items.length > 0)
        {
            btn_cart.classList.add("cant");
            btn_cart.setAttribute("cant", cart_items.length);
        }

        // MODIFICO EL TOTAL DE LA COMPRA
        let total_price = document.querySelector(".total-price");
        total_price.innerHTML ="Total: $" + cart.calcularTotal();

        mostrarMensaje();
    })
})

const mostrarMensaje = function()
{
    let msj = document.querySelector(".mensaje-container");
    msj.classList.add("aparecer");

    setTimeout(function(){
        msj.classList.remove("aparecer")
    }, 1500);
}


// Elimina un producto del carrito y actualiza los datos
const addDeleteEvent = function(e)
{
    let btn = e.target;
    btn.closest(".product").remove();

    let cart_items = document.querySelectorAll(".product");
    let btn_cart = document.querySelector("#btn-cart");

    let p = buscarXid(btn.closest(".btn-cancel").getAttribute("idProducto"));
    cart.eliminar(p);
    cartToHTML(cart);

    //ENUMERO LOS PRODUCTOS CON EL ATRIBUTO CANT
    cart_items = document.querySelectorAll(".product");

    if(cart_items.length > 0)
    {
        btn_cart.classList.add("cant");
        btn_cart.setAttribute("cant", cart_items.length);
    }
    else
    {
        btn_cart.classList.remove("cant");
    }

    // MODIFICO EL TOTAL DE LA COMPRA
    let total_price = document.querySelector(".total-price");
    total_price.innerHTML ="Total: $" + cart.calcularTotal();    
}

