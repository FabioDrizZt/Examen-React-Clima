# Examen: Conversión de Aplicación de Clima a React

## Introducción

Completar la implementación de una aplicación de consulta de clima desarrollada en **React**, replicando exactamente la funcionalidad del proyecto HTML/CSS/JS original.

**IMPORTANTE**: El esqueleto completo del proyecto ya está creado. Tu tarea es **implementar las funcionalidades** siguiendo las instrucciones del README, replicando el comportamiento del proyecto original.

Debes usar: `useState`, `useEffect`, `react-router`, `useNavigate`, `useContext`, y **Custom Hooks**.

## Servidor API

**IMPORTANTE**: El servidor API mock debe estar corriendo antes de iniciar la aplicación.

### Iniciar el Servidor

```bash
cd server
npm install  # Solo la primera vez
node mockServer.js
```

El servidor correrá en `http://localhost:3000` y la API en `http://localhost:3000/api/`.

### Endpoints Disponibles

- `GET /api/ciudades` - Obtiene todas las ciudades
- `GET /api/ciudades/:id` - Obtiene una ciudad por ID

**Asegúrate de que el servidor API esté corriendo antes de iniciar el desarrollo.**

## Archivos a Implementar

Completa la funcionalidad en los siguientes archivos:

1. **`react/src/services/api.js`** - Implementar funciones: `getCiudades()`, `getCiudad(id)`
   - Todas las peticiones a `http://localhost:3000/api/`

2. **`react/src/context/HistorialConsultasContext.jsx`** - Implementar:
   - Cargar desde `localStorage` (clave `historialConsultas`) al iniciar
   - Guardar en `localStorage` cuando cambien
   - `agregarConsulta(id, nombre)` - agregar consulta sin duplicados (verificar si ya existe el ID)
   - `limpiarHistorial()` - eliminar todo el historial de `localStorage`
   - Proporcionar el historial completo para que los componentes puedan mostrarlo

3. **`react/src/pages/Home.jsx`** - Implementar:
   - Cargar ciudades desde la API al iniciar
   - Llenar selector de ciudades con las opciones disponibles
   - Manejar envío del formulario para navegar a `/clima/:id`
   - Mostrar historial de consultas con enlaces navegables a `/clima/:id`
   - Manejar estados de carga y error

4. **`react/src/pages/Recientes.jsx`** - Implementar:
   - Mostrar historial de consultas recientes con enlaces navegables a `/clima/:id`
   - Usar contexto para obtener el historial

5. **`react/src/pages/ClimaDetail.jsx`** - Implementar:
   - Cargar ciudad usando `useParams()` para obtener ID desde la URL
   - Mostrar detalles del clima en formato tabla: ciudad, temperatura, humedad, condición
   - Agregar consulta a historial cuando se cargue (sin duplicados por ID)
   - Mostrar historial de consultas con enlaces navegables a `/clima/:id`
   - Botón para volver a la página anterior (navegar a `/`)
   - Botón para limpiar historial
   - Manejo de errores si la ciudad no existe

**Nota**: `NotFound.jsx` ya está implementado. Solo verifica que funcione.

## Requerimientos Funcionales

- Visualización de ciudades desde la API mediante selector dropdown
- Historial de consultas: persistir en `localStorage` con clave `historialConsultas`, sin duplicados (verificar por ID)
- Formato del historial: array de objetos `{id, ciudad, fecha}` donde fecha es `new Date().toLocaleString()`
- Navegación entre páginas: Home (`/`), Recientes (`/recientes`), Detalles (`/clima/:id`), 404 (`*`)
- En la página de detalles: mostrar tabla con ciudad, temperatura, humedad y condición climática
- En la página de detalles: botón para volver a inicio y botón para limpiar historial
- Historial visible en Home y ClimaDetail con enlaces navegables
- Manejo de errores y estados de carga

## Estructura del Proyecto

```
react/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Header con navegación
│   │   ├── Loading.jsx          # Componente de carga
│   │   └── ErrorMessage.jsx     # Mensaje de error
│   ├── pages/
│   │   ├── Home.jsx             # Página principal (implementar)
│   │   ├── ClimaDetail.jsx      # Detalle de clima (implementar)
│   │   ├── Recientes.jsx        # Historial de consultas (implementar)
│   │   └── NotFound.jsx         # Página 404 (ya implementada)
│   ├── context/
│   │   └── HistorialConsultasContext.jsx  # Context API (implementar)
│   ├── hooks/
│   │   └── useHistorialConsultas.js        # Custom Hook (implementar)
│   ├── services/
│   │   └── api.js               # Servicios API (implementar)
│   ├── App.jsx                  # Configuración de rutas
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
```

## Instalación y Ejecución

```bash
# Instalar dependencias
cd react
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Entrega

Subir el proyecto a **GitHub** y compartirlo con los siguientes usuarios de GitHub:
- @fabiodrizzt
- @fer24sanchez
- @gabrielaebejarano

**Nota**: No se requiere documentación adicional. El código debe estar completo y funcional.
