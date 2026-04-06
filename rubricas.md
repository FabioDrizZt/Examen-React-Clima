## Rúbrica - Examen React Clima

Puntaje total sugerido: **100 puntos**.  

---

### 1. Routing y SPA (20 pts)
- Rutas principales con React Router (`/`, `/clima/:id`, `/recientes`).  
- Navegación sin recargar la página (`useNavigate` / `Link`).  
- Manejo simple de ruta no encontrada (404).

---

### 2. Consumo de API y estado (20 pts)
- Fetch para leer la data del clima, filtrado correcto por ID.
- Uso de hooks básicos (`useState`, `useEffect`).  
- Manejo de interfaz en caso de que la ciudad no exista.

---

### 3. Páginas y componentes principales (20 pts)
- Selector funcionando y cargando opciones dinámicamente. 
- Muestra correcta de parámetros del clima en detalle.
- Componentes reutilizables y estructura razonable de carpetas.

---

### 4. Historial, Context y LocalStorage (25 pts)
- `Context` para persistir las últimas ciudades consultadas.
- Sincronización transparente con `localStorage` (manejo de efectos de montaje).
- Impedir que se agreguen duplicados en el historial de navegación.

---

### 5. Código Limpio y Custom Hooks (15 pts)
- Extracción de lógicas a hooks personalizados (ej: `useHistorialConsultas`).
- Código legible (nombres claros, indentación, ausencia de código espagueti).  
- UX aceptable y control de errores.

---

### 6. Desaprobación automática (orientativa)
- La app React no se puede ejecutar o detiene la compilación.
- No se usa React Router.  
- No se gestiona en absoluto la persistencia global del historial vía Context / LocalStorage.
