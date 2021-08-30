const container = $(".products-container");
const search = document.querySelector(".search");


const urlJSON = "../JSON/productos.json";
const arrayProductos = [];

$.getJSON(urlJSON, function(respuesta, estado)
{
    if(estado === "success")
    {
        let productos = respuesta;
        for(const p of productos)
        {
            arrayProductos.push(new Productos(p.id, p.nombre, p.stock, p.precio, p.img, p.info));
        }
    }
});
    

function crearYagregarCards()
{
    // Recorro el array de productos para agregarlos al DOM
    for(let i = 0; i < arrayProductos.length; i++)
    {
        if(arrayProductos[i].stock > 0)
        {
            container.append(arrayProductos[i].toHTML());
        }
    }
}

function crearYagregarCards1(nombre)
{
    let arrayAmostar = arrayProductos.filter(element => element.info.includes(nombre.toLowerCase()));
    container.html("");
    for(let i = 0; i < arrayAmostar.length; i++)
    {
       $(".products-container").append(arrayAmostar[i].toHTML());
    }

    if(arrayAmostar.length == 0)
    {
        container.html(`<h3>No se encontro nada para: "${nombre}" </h3>`);
    }

}

search.addEventListener("keypress", function(e)
{
    let search = document.querySelector(".search").value;
    if(e.code == 13)
    {
        crearYagregarCards1(search);
    }
})

$("#form-search").submit(function(event)
{
    event.preventDefault();
    let textoIngresado = $(".search").val();
    crearYagregarCards1(textoIngresado);
});


$(".btn-search").click(function()
{
    let textoIngresado = $(".search").val();
    crearYagregarCards1(textoIngresado);
})
