
function calcularPromedio() {
    const numEstudiantes = parseInt(document.getElementById('numEstudiantes').value);
    let sumaCalificaciones = 0;

    const promedio = sumaCalificaciones / numEstudiantes;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `El promedio es: ${promedio}`;
}