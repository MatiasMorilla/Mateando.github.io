const slider_container = document.querySelector("#slider"); // Obtengo el contenedor de los sliders
let slider_items = document.querySelectorAll(".slider-item"); // obtengo una lista de los slider items
let last_slider = slider_items[slider_items.length-1]; // obtengo el ultimo slide


/**
 * Obtengo el primer slide
 * despues muevo el container para la izquierda
 * y coloco el primer slide a lo ultimo
 */
function next()
{
    let first_slider = document.querySelectorAll(".slider-item")[0];
    slider_container.style.marginLeft = "-200%";
    slider_container.style.transition = "all .5s";

    setTimeout(function()
    {
        slider_container.style.transition = "none";
        slider_container.insertAdjacentElement("beforeend", first_slider);
        slider_container.style.marginLeft = "-100%";
    }, 500);
}

/**
 * Obtengo el ultimo slide
 * despues muevo el container para la derecha
 * y coloco el ultimo slide al principio
 */
function prev()
{
    let slider_items = document.querySelectorAll(".slider-item");
    let last_slider = slider_items[slider_items.length - 1];
    slider_container.style.marginLeft = "0";
    slider_container.style.transition = "all .5s";

    setTimeout(function(){
        slider_container.style.transition = "none";
        slider_container.insertAdjacentElement("afterbegin", last_slider);
        slider_container.style.marginLeft = "-100%";
    }, 500);
}


function crearYcargarSlide()
{
    let slider = document.querySelector(".slider");

    for(let i = 0; i < arrayProductos.length; i++)
    {
        let slide = document.createElement("div");
        slide.className = "slider-item";

        arrayProductos[i].innerHTML =`<img src="`+ arrayProductos[i].img +`" alt="`+ arrayProductos[i].nombre +`" class="slider-img">`;    
        slide.innerHTML = arrayProductos[i].innerHTML;
        
        slider.appendChild(slide);
    }
}


