# Rúbrica de Evaluación - Examen React Clima

**Puntaje Total: 100 puntos**

### 1. React Router - Navegación (10 puntos)
- Rutas: `/`, `/recientes`, `/clima/:id`, `*` (404)
- Uso correcto de `useNavigate()` y `useParams()`
- Navegación funcional entre páginas

### 2. useState - Manejo de Estado Local (10 puntos)
- Estados para: ciudades, ciudad seleccionada, detalles, carga, errores
- Uso apropiado de `useState` en componentes

### 3. useEffect - Efectos y Carga de Datos (10 puntos)
- Carga de datos desde la API
- Dependencias correctas en el array de dependencias
- Manejo de errores en efectos
- Limpieza de efectos cuando sea necesario

### 4. useContext - Estado Global (15 puntos)
- `HistorialConsultasContext` funcional
- Persistencia en `localStorage` con clave `historialConsultas`
- Sin duplicados (verificar por ID antes de agregar)
- Carga inicial desde `localStorage`
- Formato correcto: array de objetos `{id, ciudad, fecha}`

### 5. Custom Hook - useHistorialConsultas (10 puntos)
- Hook personalizado encapsulando lógica de historial
- Validación de contexto
- Uso correcto de `useContext`

### 6. Página Principal - Home (10 puntos)
- Selector de ciudades funcionando
- Carga ciudades desde la API y llena el selector
- Maneja envío del formulario para navegar a `/clima/:id`
- Muestra historial de consultas con enlaces navegables a `/clima/:id`
- Manejo de estados de carga y error

### 7. Página de Recientes (10 puntos)
- Muestra historial de consultas realizadas
- Enlaces navegables a `/clima/:id` para cada consulta
- Usa contexto correctamente para obtener el historial
- Muestra ciudad y fecha de cada consulta

### 8. Página de Detalles - ClimaDetail (10 puntos)
- Obtiene ID de URL con `useParams()`
- Muestra detalles del clima en formato tabla: ciudad, temperatura, humedad, condición
- Agrega automáticamente a historial cuando se carga (sin duplicados)
- Muestra historial de consultas con enlaces navegables
- Botón para volver a inicio (`/`)
- Botón para limpiar historial
- Manejo de errores si la ciudad no existe

### 9. Comunicación con API (10 puntos)
- Peticiones correctas a todos los endpoints
- Manejo de errores y estados de carga
- Uso correcto de `fetch` o `axios`
- Manejo de respuestas y errores HTTP

### 10. Modularidad y Organización (5 puntos)
- Código organizado, componentes separados
- Sin duplicación de código
- Nombres descriptivos de variables y funciones
- Estructura de carpetas respetada

## Criterios de Desaprobación Automática

El proyecto será desaprobado si:
- ❌ La aplicación no ejecuta o tiene errores críticos
- ❌ No se implementa el sistema de historial con Context API y `localStorage`
- ❌ No se comunica con la API del servidor (usa archivos JSON estáticos)
- ❌ No se implementan las rutas básicas de navegación (`/`, `/recientes`, `/clima/:id`, `*`)
- ❌ No se muestra el historial en las páginas correspondientes

## Bonus (Hasta 10 puntos adicionales)

- **+5 puntos**: Botón para limpiar historial de consultas en la página de recientes (además del que ya debe estar en ClimaDetail)
- **+5 puntos**: Mostrar ciudades similares en la página de detalles (misma condición climática o temperatura similar)

## Notas Importantes

- El código debe estar completo y funcional, replicando el comportamiento del proyecto HTML/CSS/JS original
- Se evaluará la calidad del código y el uso correcto de los hooks de React
- Los componentes deben manejar correctamente los estados de carga y error
- La persistencia en `localStorage` debe funcionar correctamente con la clave `historialConsultas`
- El historial debe guardarse con formato `{id, ciudad, fecha}` donde fecha es `new Date().toLocaleString()`
- No se permiten duplicados en el historial (verificar por ID antes de agregar)
