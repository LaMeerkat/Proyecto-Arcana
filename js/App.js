const pintarProductos = () => {
    const contenedor = document.getElementsByClassName('grid-productos');

    productos.forEach(producto =>{
        const div = document.createElement('div');
        div.classList.add('fila-1');
        div.innerHTML += `
        <div class="producto">
            <img src="${producto.img}" alt="playera-baphomet">
            <div class="info-producto"> <a class="boton" href="#"> COMPRAR </a> <p>${producto.precio}</p> </div>
            </div>
        `
        contenedor.appendChild(div)

    })
  
}

pintarProductos ()
