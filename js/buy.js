let section_buy = $(".section-buy");
section_buy.css("display", "none");

$(".btn-cancelar-compra").click(function()
{
    section_buy.css("display", "none");
    $("html, body").css("overflow", "inherit");
});

$(".btn-buy").click(function()
{
    if(cart.calcularTotal() > 0)
    {
        section_buy.css("display", "block");
        $(".cart-container-product").addClass("cart-hidden");
        $("html, body").animate(
        {
            scrollTop: $("#header")
        }),

        $("html, body").css("overflow", "hidden");

        $(".total-compra").html(`Total: $${cart.calcularTotal()}`);
    } 
});

$(function()
{
    $("#form-buy").validate({
        rules: {
            nombre : {
              required: true,
              minlength: 3
            },
            apellido: {
                required: true,
                minlength: 3
            },
            email: {
              required: true,
              email: true
            },
            direccion: {
                required: true,
                minlength: 3
            },
            numeroTarjeta: {
                required: true,
                minlength: 16,
                maxlength: 16
            },
            nombreTitular: {
                required: true,
                minlength: 3
            },
            fecha: {
                required: true,
            },
            codigo: {
                required: true,
                minlength: 3,
                maxlength: 3
            },
        },

        messages: {
            nombre : {
                required: "Porfavor, ingrese su nombre",
                minlength: "Debe contener minimo 3 caracteres"
              },
              apellido: {
                required: "Porfavor, ingrese su apellido",
                minlength: "Debe contener minimo 3 caracteres"
              },
              email: {
                required: "Porfavor, ingrese su email",
                email: "Por favor, introduce una dirección de correo electrónico válida"
              },
              direccion: {
                required: "Porfavor, ingrese su direccion",
                minlength: "Debe contener minimo 3 caracteres"
              },
              numeroTarjeta: {
                required: "Porfavor, ingrese el numero de su tarjeta",
                minlength: "Por favor, introduce un numero de tarjeta válida"
              },
              nombreTitular: {
                required: "Porfavor, ingrese su nombre",
                minlength: "Debe contener minimo 3 caracteres"
              },
              fecha: {
                required: "Porfavor, ingrese la fecha de vencimiento",
              },
              codigo: {
                required: "Porfavor, ingrese el CVV de su tarjeta",
                minlength: "Por favor, introduce un CVV válido"
              },

              submitHandler: function(form) {
                form.submit();
              }
        }
    });
});
