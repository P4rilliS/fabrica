// Mensaje emergente de bienvenida
// window.onload = function () {
//     alert("Bienvenido a Corporación Sueño de Ángel C.A. ¡Descubre el confort que mereces!");
// };

// Carrusel básico de productos
let currentSlide = 0; // Índice del slide actual
const slides = document.querySelectorAll('.producto'); // Todos los productos
const totalSlides = slides.length;

function showSlide(index) {
    // Ocultar todos los productos
    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    // Mostrar el producto actual
    slides[index].style.display = "block";
}

// Mostrar el primer slide al cargar la página
showSlide(currentSlide);

// Cambiar al siguiente producto cada 1 segundo
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides; // Ciclo entre productos
    showSlide(currentSlide);
}, 1000);
