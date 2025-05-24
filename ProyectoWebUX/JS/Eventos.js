// Datos de los eventos - Puedes expandir esta lista fácilmente
const datosEventos = [
    {
        titulo: "Unab Fest",
        descripcion: "Festival que aporta a la creación de una experiencia universitaria única mediante el aprendizaje más allá de las aulas, propiciando encuentros e integración con diversas actividades culturales y académicas para la comunidad UNAB."
    },
    {
        titulo: "Ulibro",
        descripcion: "Somos una fiesta cultural que promueve el acercamiento a las artes, el patrimonio y la lectura"
    },
    {
        titulo: "Semana de ingenieria",
        descripcion: "En el evento se reunirán estudiantes, docentes y profesionales para abordar desde distintos campos disciplinares el aporte de la ingeniería a la sociedad."
    },
    {
        titulo: "Feria internacional de la salud",
        descripcion: "l XXI Congreso de la Facultad de Ciencias de la Salud de la Universidad UNAB tiene como lema Medicina interna: Excelencia clínica sin fronteras y está enfocado en temas relacionados con esta rama de la salud."
    }
];
        
// Funcionalidad del carrusel
document.addEventListener('DOMContentLoaded', function() {
const carruselInterior = document.getElementById('carruselInterior');
const imagenes = document.querySelectorAll('.carrusel-imagen');
const botonAnterior = document.getElementById('botonAnterior');
const botonSiguiente = document.getElementById('botonSiguiente');
const descripcion = document.querySelector('.carrusel-descripcion');
const titulo = document.querySelector('.carrusel-titulo');
const texto = document.querySelector('.carrusel-texto');
const contenedorIndicadores = document.getElementById('indicadores');

let indiceActual = 0;
const totalImagenes = imagenes.length;
            
            // Crear indicadores
function crearIndicadores() {
    for (let i = 0; i < totalImagenes; i++) {
        const indicador = document.createElement('div');
        indicador.classList.add('indicador');
        if (i === 0) indicador.classList.add('activo');
        indicador.dataset.indice = i;
        
        indicador.addEventListener('click', function() {
            cambiarImagen(parseInt(this.dataset.indice));
        });
        
        contenedorIndicadores.appendChild(indicador);
    }
}
            
// Actualizar descripción
function actualizarDescripcion() {
  titulo.textContent = datosEventos[indiceActual].titulo;
  texto.textContent = datosEventos[indiceActual].descripcion;
}

// Cambiar imagen
function cambiarImagen(nuevoIndice) {
    imagenes[indiceActual].classList.remove('activa');
    document.querySelectorAll('.indicador')[indiceActual].classList.remove('activo');
    
    indiceActual = nuevoIndice;
    
    // Manejar índices fuera de rango
    if (indiceActual < 0) indiceActual = totalImagenes - 1;
    if (indiceActual >= totalImagenes) indiceActual = 0;
    
    imagenes[indiceActual].classList.add('activa');
    document.querySelectorAll('.indicador')[indiceActual].classList.add('activo');
    actualizarDescripcion();
}

// Inicializar
crearIndicadores();
actualizarDescripcion();
            
// Eventos de clic para botones de navegación
botonAnterior.addEventListener('click', function() {
    cambiarImagen(indiceActual - 1);
});

botonSiguiente.addEventListener('click', function() {
    cambiarImagen(indiceActual + 1);
});

// Mostrar/ocultar descripción al hacer clic en la imagen
carruselInterior.addEventListener('click', function() {
    carruselInterior.classList.toggle('mostrar-descripcion');
});
});

let toggle=document.getElementById('toggle');
toggle.addEventListener('change',(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('Modo-oscuro');
    if (checked == true){
        label_toggle.innerHTML='<i class="fa-solid fa-sun fa-2xl" style="color: #FFD43B;"></i>'
    }else{
        label_toggle.innerHTML='<i class="fa-solid fa-moon fa-2xl"></i>'
    }
})

document.addEventListener("DOMContentLoaded", () => {
const contenedor = document.getElementById("contenedorMain");
setTimeout(() => {
    contenedor.style.left = "0";
}, 80); 
});