const guardadoLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

guardadoLocal("ArrayDeProductos", JSON.stringify(arrayProductos));


