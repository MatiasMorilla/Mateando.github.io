<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <!-- Link Estilos Generales -->
     <link rel="stylesheet" href="../css/styles.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <title>Mateando</title>
</head>
<body class="body-main">
   <!-- HEADER -->
   <header class="header" id="header">
        <nav class="nav">
            <div class="brand">
                <a href="../index.html">MATEANDO</a>
            </div>
            <form action="" class="form-search" id="form-search">
                <input type="search" class="search" placeholder="Busca tu producto aqui...">
                <button class="btn btn-search" type="button">Buscar</button>
            </form>
            <div class="cart-container">
                <button class="btn-cart" id="btn-cart">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </nav>

        <!-- CARRITO -->
        <div class="cart-container-product cart-hidden">    
            <div class="cart">

            </div>
            
            <div class="buy-container">
                <span class="total-price">Total:</span>
                <button class="btn btn-buy">Comprar</button>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="check">
            <i class="far fa-check-circle"></i>
        </div>
        <div class="texto">
            <p>Felicitaciones
            <span style="color: #bcbcbc"><?php
                $nombre = $_POST["nombre"];
                $apellido = $_POST["apellido"];

                echo "$nombre $apellido";
            ?></span>
            , tu compra se ha realizado con exito!</p>
            <p>Gracias por confiar en nosotros!</p>
        </div>
        <div class="container-btn">
            <a href="../index.php">Volver al inicio</a>
        </div>
    </div>
    
    
     <!-- Footer -->
     <footer class="footer">
        <div class="redes">
            <a href="#"><i class="fas fa-envelope"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram-square"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
        </div>
        <div class="footer-brand">
            <a href="#">MATEANDO</a>
        </div>
    </footer>
</body>
</html>