        // Datos de ejemplo - Esto se reemplazaría con datos reales del estudiante
        const estudiante = {
            nombre: "Diego Andres Meza Rodriguez",
            programa: "Medicina",
            id: "U00081690",
            horasAcumuladas: 0,
            horasRestantes: 90,
            horasRequeridas: 90
        };

        // Datos de ejemplo para los eventos
        const eventos = [
            {
                id: 1,
                nombre: "UNAB Fest 2025",
                descripcion: "Festival anual universitario con múltiples actividades culturales, académicas y recreativas para toda la comunidad universitaria.",
                horas: 8,
                subeventos: [
                    { nombre: "Taller: Escribir con imágenes", horas: 2, participado: true },
                    { nombre: "Taller: Juego de la cerveza", horas: 1, participado: true },
                    { nombre: "Concurso Spelling Bee", horas: 3, participado: false },
                    { nombre: "Taller: Tu sitio web con Figma", horas: 2, participado: true }
                ]
            },
            {
                id: 2,
                nombre: "Semana de Ingeniería",
                descripcion: "Semana dedicada a presentaciones, talleres y conferencias sobre temas actuales en ingeniería.",
                horas: 15,
                subeventos: [
                    { nombre: "Conferencia Inteligencia Artificial", horas: 3, participado: true },
                    { nombre: "Hackathon 24h", horas: 8, participado: true },
                    { nombre: "Taller de Diseño UX", horas: 4, participado: false }
                ]
            },
            {
                id: 3,
                nombre: "Voluntariado Comunitario",
                descripcion: "Proyecto de servicio comunitario en barrios aledaños a la universidad.",
                horas: 20,
                subeventos: [
                    { nombre: "Taller + Conversatorio Hablemos de moda sostenible", horas: 4, participado: true },
                    { nombre: "Mejoramiento de Espacios Comunitarios", horas: 5, participado: false },
                    { nombre: "Taller participativo limpieza ambiental", horas: 5, participado: true }
                ]
            },
            {
                id: 4,
                nombre: "Congreso de Tecnologías Emergentes",
                descripcion: "Congreso internacional sobre las últimas tendencias en tecnología e innovación.",
                horas: 12,
                subeventos: [
                    { nombre: "Blockchain y Criptomonedas", horas: 3, participado: false },
                    { nombre: "Realidad Aumentada en Educación", horas: 3, participado: true },
                    { nombre: "IoT y Ciudades Inteligentes", horas: 3, participado: true },
                    { nombre: "Taller de Robótica", horas: 3, participado: false }
                ]
            },
            {
                id: 5,
                nombre: "Feria del Libro UNAB",
                descripcion: "Evento cultural con presentaciones de libros, charlas con autores y actividades literarias.",
                horas: 5,
                subeventos: [
                    { nombre: "Conversatorio con Autores", horas: 2, participado: true },
                    { nombre: "Taller de Escritura Creativa", horas: 3, participado: false }
                ]
            }
        ];

        // Función para cargar los datos del estudiante
        function cargarDatosEstudiante() {
            document.getElementById('nombreEstudiante').textContent = estudiante.nombre;
            document.getElementById('programaEstudiante').textContent = estudiante.programa;
            document.getElementById('idEstudiante').textContent = estudiante.id;
        }

        // Función para calcular las horas acumuladas
        function calcularHorasAcumuladas() {
            let horasAcumuladas = 0;
            
            eventos.forEach(evento => {
                evento.subeventos.forEach(subevento => {
                    if (subevento.participado) {
                        horasAcumuladas += subevento.horas;
                    }
                });
            });
            
            estudiante.horasAcumuladas = horasAcumuladas;
            estudiante.horasRestantes = estudiante.horasRequeridas - horasAcumuladas;
            
            return horasAcumuladas;
        }

        // Función para actualizar la visualización del progreso
        function actualizarProgreso() {
            const horasAcumuladas = calcularHorasAcumuladas();
            const porcentaje = Math.min(100, Math.round((horasAcumuladas / estudiante.horasRequeridas) * 100));
            
            document.getElementById('horasAcumuladas').textContent = horasAcumuladas;
            document.getElementById('horasRestantes').textContent = estudiante.horasRestantes;
            document.getElementById('totalHorasAcumuladas').textContent = horasAcumuladas;
            document.getElementById('totalHorasRestantes').textContent = estudiante.horasRestantes;
            
            const progresoElement = document.getElementById('progresoHoras');
            progresoElement.style.width = porcentaje + '%';
            progresoElement.textContent = porcentaje + '%';
            
            const badgeEstado = document.getElementById('badgeEstado');
            if (porcentaje >= 100) {
                badgeEstado.textContent = 'Completo';
                badgeEstado.className = 'badge-completo';
            } else {
                badgeEstado.textContent = 'Pendiente';
                badgeEstado.className = 'badge-pendiente';
            }
        }

        // Función para cargar la lista de eventos
        function cargarListaEventos() {
            const listaEventosElement = document.getElementById('listaEventos');
            listaEventosElement.innerHTML = '';
            
            eventos.forEach(evento => {
                // Calcular horas participadas en este evento
                let horasParticipadas = 0;
                evento.subeventos.forEach(subevento => {
                    if (subevento.participado) {
                        horasParticipadas += subevento.horas;
                    }
                });
                
                // Crear elemento del evento
                const eventoElement = document.createElement('div');
                eventoElement.className = 'evento';
                eventoElement.dataset.eventoId = evento.id;
                
                eventoElement.innerHTML = `
                    <div class="evento-cabecera">
                        <div class="evento-nombre">${evento.nombre}</div>
                        <div class="evento-horas">${horasParticipadas} / ${evento.horas} hrs</div>
                    </div>
                    <div class="evento-detalles">
                        <div class="evento-descripcion">${evento.descripcion}</div>
                        <h4>Subeventos:</h4>
                        <div class="lista-subeventos">
                            ${evento.subeventos.map(subevento => `
                                <div class="subevento ${subevento.participado ? 'subevento-participado' : ''}">
                                    <div class="subevento-nombre">
                                        ${subevento.nombre}
                                        ${subevento.participado ? '<span class="badge-completo">Participado</span>' : ''}
                                    </div>
                                    <div class="subevento-horas">${subevento.horas} hrs</div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="evento-resumen">
                            <div><strong>Total participado:</strong> ${horasParticipadas} hrs</div>
                            <div><strong>Total del evento:</strong> ${evento.horas} hrs</div>
                        </div>
                    </div>
                `;
                
                // Agregar evento para mostrar/ocultar detalles
                eventoElement.querySelector('.evento-cabecera').addEventListener('click', function() {
                    const detalles = this.nextElementSibling;
                    detalles.classList.toggle('activo');
                });
                
                listaEventosElement.appendChild(eventoElement);
            });
        }

        // Función de inicialización
        function inicializar() {
            cargarDatosEstudiante();
            cargarListaEventos();
            actualizarProgreso();
        }

        // Iniciar la aplicación cuando el documento esté cargado
        document.addEventListener('DOMContentLoaded', inicializar);


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

console.log("Universo alterno")