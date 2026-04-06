## Examen Práctico - React Clima 

**Objetivo general**  
Migrar la app interactiva del Clima (hecha en JS vanilla) a una **SPA en React**, consultando la API.

---

### 1. Qué hay en el repo

- **Versión referencia (NO tocar)**: `index.html`, `clima.html`, `css/`, `js/`, `data/`.
- **API (Mock/JSON)**: El proyecto utiliza `data/datos.json`.
- **Proyecto React**: carpeta `react/`, con el esqueleto base en Vite + React Router.

Tu trabajo es construir la versión en React tomando como modelo la interactividad de la versión vanilla.

---

### 2. Qué debe tener tu app React

- **Routing (React Router)**  
  - `/` -> Buscador / Selector de ciudades.  
  - `/clima/:id` -> Detalle del clima de la ciudad.
  - `/recientes` -> Historial de búsquedas recientes.

- **Consumo de Datos (fetch desde React)**  
  - Usar los datos (ya sea apuntando al archivo json local o servidor configurado de Express si aplica).  
  - Manejar **loading** y **error**.

- **Historial (Context API y LocalStorage)**  
  - Usar un Context para guardar las últimas consultas realizadas (sin duplicados).
  - Persistir este historial utilizando el LocalStorage.

---

### 3. React: piezas mínimas esperadas

- **Hooks**: `useState`, `useEffect`, `useContext`.
- **Context**: Manejador del Historial de consultas.
- **Componentes y páginas clave**:
  - Catálogo principal, Detalle del Clima, Vista de Historial.
  - Componentes fragmentados.

---

### 4. Cómo ejecutar todo

1. **App React**
   Ingresa a la carpeta `react/`, instala dependencias con tu manejador de paquetes de Node, y ejecuta el servidor de desarrollo (`dev`).
   Abre la URL que se sirve localmente.

---

### 5. Reglas básicas del examen

- **No modificar** la versión vanilla salvo indicación del docente.
- **Sí puedes** crear componentes, hooks, contextos y utilidades en tu proyecto React como estimes conveniente.

Para ver **cómo se puntúa** el examen, consulta `rubricas.md`.
