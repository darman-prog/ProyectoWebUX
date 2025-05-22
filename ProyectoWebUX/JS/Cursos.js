const cursos = {
  1: {
    nombre: "Defensa y Control Metabólico",
    descripcion: "Estudio de los mecanismos de defensa del organismo y el control metabólico en condiciones fisiológicas y patológicas.",
    profesor: "Dr. Alejandro Vargas",
    creditos: 10,
    horario: ["Lunes 8-10am", "Miércoles 8-10am"]
  },
  2: {
    nombre: "Defensa y Control Metabólico Práctica",
    descripcion: "Aplicación práctica de los conceptos relacionados con el sistema inmune y el metabolismo en el laboratorio.",
    profesor: "Dra. Carolina Suárez",
    creditos: 0,
    horario: ["Viernes 10-12pm"]
  },
  3: {
    nombre: "Fundamentos de Bioestadística y Epidemiología",
    descripcion: "Principios básicos para el análisis de datos en salud y comprensión de los factores que afectan a las poblaciones.",
    profesor: "Dr. Javier Rincón",
    creditos: 4,
    horario: ["Martes 2-4pm", "Jueves 2-4pm"]
  },
  4: {
    nombre: "Antropología Médica",
    descripcion: "Estudio de las prácticas médicas desde una perspectiva cultural y social, analizando su impacto en la atención de salud.",
    profesor: "Dra. Natalia Restrepo",
    creditos: 2,
    horario: ["Miércoles 4-7pm"]
  },
  5: {
    nombre: "Médico UNAB",
    descripcion: "Curso integrador que promueve los valores institucionales y el compromiso del estudiante con la excelencia médica.",
    profesor: "Dr. Felipe Gómez",
    creditos: 2,
    horario: ["Viernes 8-9am"]
  }
};


const botones = document.querySelectorAll(".curso");
const descripcion = document.getElementById("descripcion");
const profesor = document.getElementById("profesor");
const creditos = document.getElementById("creditos");
const horario = document.getElementById("horario");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const id = boton.dataset.curso;
    const curso = cursos[id];

    document.querySelector("#infoCurso h2").textContent = curso.nombre;
    descripcion.textContent = `Descripción: ${curso.descripcion}`;
    profesor.textContent = `Profesor: ${curso.profesor}`;
    creditos.textContent = `Créditos: ${curso.creditos}`;
    horario.innerHTML = `<strong>Horario:</strong><ul>${curso.horario.map(dia => `<li>${dia}</li>`).join("")}</ul>`;
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
