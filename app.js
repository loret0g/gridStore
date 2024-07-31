/* INDEX.html -- Saber imagen seleccionada y su nombre para mostrarlo en producto.html */
const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {
    const imagen = producto.querySelector('.producto__imagen');
    const nombreProducto = producto.querySelector('.producto__nombre').innerText;

    imagen.addEventListener('click', function() {
        localStorage.setItem('imagenSeleccionada', imagen.src); // Guardo ruta de la imagen seleccionada en localStorage
        localStorage.setItem('nombreProducto', nombreProducto); // Guardar el nombre del producto en localStorage
    });
});

/* PRODUCTO.html -- Asignar ruta y nombre del producto */
document.addEventListener('DOMContentLoaded', function() {
    const imagenSeleccionada = localStorage.getItem('imagenSeleccionada');  // Obtener imagen seleccionada de localStorage
    const nombreProducto = localStorage.getItem('nombreProducto');          // Obtener nombre del producto de localStorage
    
    if (imagenSeleccionada && nombreProducto) {
        const camisaImagen = document.querySelector('.camisa__imagen');     // Seleccionar el elemento de la imagen en producto.html
        const productoTitulo = document.querySelector('.titulo_producto'); // Seleccionar el elemento del título en producto.html

        camisaImagen.src = imagenSeleccionada;          // Asignar la ruta de la imagen seleccionada al elemento
        productoTitulo.textContent = nombreProducto;    // Asignar el nombre del producto al elemento del título
    }
});