
function asignarAulas() {
    
    const numClases = parseInt(document.getElementById('numClases').value);
    const numAulas = parseInt(document.getElementById('numAulas').value);

   
    const horarios = [];
    const aulasAsignadas = [];
    for (let i = 0; i < numClases; i++) {
        horarios[i] = [];
        aulasAsignadas[i] = 0; 
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h2>Asignaciones:</h2><ul>';
    for (let i = 0; i < numClases; i++) {
        resultadoDiv.innerHTML += `<li>Clase ${i + 1}: Aula ${aulasAsignadas[i] + 1}</li>`;
    }
    resultadoDiv.innerHTML += '</ul>';
}