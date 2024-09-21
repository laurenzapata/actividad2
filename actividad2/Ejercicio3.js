
const estudiantesDiv = document.getElementById('estudiantes');
const informeDiv = document.getElementById('informe');

function agregarEstudiantes(numEstudiantes) {
    for (let i = 0; i < numEstudiantes; i++) {
        const estudianteDiv = document.createElement('div');
        estudianteDiv.innerHTML = `<label>Estudiante ${i + 1}:</label> <input type="checkbox">`;
        estudiantesDiv.appendChild(estudianteDiv);
    }
}

function generarInforme() {
    const estudiantes = document.querySelectorAll('#estudiantes input[type="checkbox"]');
    let presentes = 0;
    estudiantes.forEach(estudiante => {
        if (estudiante.checked) {
            presentes++;
        }
    });
    const porcentajeAsistencia = (presentes / estudiantes.length) * 100;
    informeDiv.textContent = `Porcentaje de asistencia: ${porcentajeAsistencia}%`;
}

const numEstudiantes = 5; 
agregarEstudiantes(numEstudiantes);