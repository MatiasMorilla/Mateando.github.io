const container = $(".products-container");
const search = document.querySelector(".search");

const p1 = new Productos(1, "Imperial", 50, 5000, "images/mateImperial.png", "mate imperial negro");
const p2 = new Productos(2, "Camionero", 80, 1000, "images/camioneroMarron.png", "mate camionero marron");
const p3 = new Productos(3, "Torpedo Marron", 70, 1500, "images/torpedoMarron.png", "mate torpedo marron");
const p4 = new Productos(4, "Torpedo Negro", 10, 2000, "images/torpedoNegro.png", "mate torpedo negro");
const p5 = new Productos(5, "Matera Negra", 15, 952, "images/materaNegra.png", "matera negra");
const p6 = new Productos(6, "Matera Marron Claro", 20, 1250, "images/materaMarronC.png", "matera marron claro");
const p7 = new Productos(7, "Matera Marron Oscuro", 10, 1250, "images/materaMarronO.png", "matera marron oscuro");
const p9 = new Productos(9, "Stanley Verde", 15, 12000, "images/termoVerde.png", "termo stanley verde");
const p11 = new Productos(11, "Termo Gris", 50, 2000, "images/termoGris.png", "termo gris");
const p12 = new Productos(12, "Termo Gris con Pico", 50, 2200, "images/termoPico.png", "termo gris con pico");
const p13 = new Productos(13, "Yerbera Negra", 40, 800, "images/yerbaNegra.png", "yerbera y azucarera negra");
const p14 = new Productos(14, "Yerbera Marron", 50, 800, "images/YerbaMarron.png", "yerbera y azucarera marron");
const p15 = new Productos(15, "Yerbera Azul", 60, 800, "images/YerbaAzul.png", "yerbera y azucarera azul");
const p16 = new Productos(16, "Set Matero Marron", 60, 5500, "images/setMatero1.png", "set matero marron");
const p17 = new Productos(17, "Set Matero Negro", 60, 5500, "images/setMatero4.png", "set matero negra");
const p18 = new Productos(18, "Set Matero Verde", 60, 5500, "images/setMatero3.png", "set matero verde"); 

const arrayProductos = [p1, p2, p3, p4, p5, p6 , p7, p9, p11, p12, p13, p14, p15, p16, p17, p18];



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
