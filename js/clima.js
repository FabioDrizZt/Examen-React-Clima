/**
 * clima.js
 * 
 * Controlador base que muestra el clima leyendo el ID desde la URL.
 * En React:
 * - Se usaría `useParams()` de react-router-dom para el ID.
 * - `useEffect` se dispararía al montar el componente para ejecutar el `fetch`.
 * - Todo el manejo del DOM manual (innerHTML) se reemplaza por JSX.
 */

// Función para mostrar el clima de la ciudad seleccionada por ID
function mostrarClima() {
  const ciudadId = obtenerParametroURL("id");
  if (!ciudadId) return;

  fetch("/data/datos.json")
    .then((response) => response.json())
    .then((datos) => {
      const ciudad = datos.ciudades.find((c) => c.id == ciudadId);
      if (!ciudad) return;

      // Mostrar datos del clima en una tabla
      const tablaClima = document.getElementById("tablaClima");
      tablaClima.innerHTML = `
                <tr><td><i class="fas fa-city"></i> Ciudad</td><td>${ciudad.nombre}</td></tr>
                <tr><td><i class="bi bi-thermometer-half"></i> Temperatura</td><td>${ciudad.temperatura} °C</td></tr>
                <tr><td><i class="fas fa-tint"></i> Humedad</td><td>${ciudad.humedad} %</td></tr>
                <tr><td><i class="bi bi-cloud"></i> Condición</td><td>${ciudad.condicion}</td></tr>
            `;

      // Guardar la consulta en el historial
      guardarEnHistorial(ciudad.id, ciudad.nombre);
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
}

// Función para guardar una consulta en el historial
// En React: El historial debería ser una variable de estado (`useState`) o manejarse vía Context
// si se necesita en múltiples componentes. Para persistirlo, se lee/escribe en localStorage junto al `useEffect`.
function guardarEnHistorial(id, ciudad) {
  let historial = JSON.parse(localStorage.getItem("historialConsultas")) || [];

  const ciudadYaConsultada = historial.some((consulta) => consulta.id === id);

  if (!ciudadYaConsultada) {
    historial.push({ id, ciudad, fecha: new Date().toLocaleString() });
    localStorage.setItem("historialConsultas", JSON.stringify(historial));
  }

  mostrarHistorial();
}

// Función para mostrar el historial de consultas con enlaces
function mostrarHistorial() {
  const historial =
    JSON.parse(localStorage.getItem("historialConsultas")) || [];
  const listaHistorial = document.getElementById("listaHistorial");
  listaHistorial.innerHTML = "";

  historial.forEach((consulta) => {
    const li = document.createElement("li");
    const enlace = document.createElement("a");
    enlace.href = `clima.html?id=${consulta.id}`;
    enlace.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${consulta.ciudad} - <i class="bi bi-clock"></i> ${consulta.fecha}`;
    li.appendChild(enlace);
    listaHistorial.appendChild(li);
  });
}

// Función para obtener los parámetros de la URL
function obtenerParametroURL(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}

// Función para limpiar el historial de consultas
function limpiarHistorial() {
  localStorage.removeItem("historialConsultas");
  mostrarHistorial();
}

// Función para volver a la página anterior
function volverAtras() {
  window.location.href = "index.html";
}

// Inicializar funciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  mostrarClima();
  mostrarHistorial();
  document
    .getElementById("limpiarHistorial")
    .addEventListener("click", limpiarHistorial);
  document.getElementById("volverAtras").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
