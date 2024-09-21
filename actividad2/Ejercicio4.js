// script.js
function agregarFilaHorario(hora, espacio, actividad) {
    const row = horarioBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.textContent = hora;
    cell2.textContent = espacio;
    cell3.textContent = actividad;
}
