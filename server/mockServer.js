// Servidor Mock para desarrollo local
// Ejecutar con: node server/mockServer.js
import express from "express";
import cors from "cors";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Cargar datos de ciudades
let ciudades = [];
try {
  const ciudadesData = readFileSync(
    join(__dirname, "../data/datos.json"),
    "utf-8"
  );
  const datos = JSON.parse(ciudadesData);
  ciudades = datos.ciudades || [];
  console.log(`✅ Cargados ${ciudades.length} ciudades`);
} catch (error) {
  console.error("Error cargando ciudades:", error);
}

// Rutas de la API

// GET /api/ciudades - Obtener todas las ciudades
app.get("/api/ciudades", (req, res) => {
  try {
    res.json({ ciudades });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las ciudades" });
  }
});

// GET /api/ciudades/:id - Obtener una ciudad por ID
app.get("/api/ciudades/:id", (req, res) => {
  try {
    const ciudadId = parseInt(req.params.id);
    const ciudad = ciudades.find((c) => c.id === ciudadId);

    if (!ciudad) {
      return res.status(404).json({ error: "Ciudad no encontrada" });
    }

    res.json(ciudad);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la ciudad" });
  }
});

// GET /api/ciudades/buscar/:nombre - Buscar una ciudad por nombre
app.get("/api/ciudades/buscar/:nombre", (req, res) => {
  try {
    const nombreBuscado = req.params.nombre;
    const ciudad = ciudades.find(
      (c) => c.nombre.toLowerCase() === nombreBuscado.toLowerCase()
    );

    if (!ciudad) {
      return res.status(404).json({ error: "Ciudad no encontrada" });
    }

    res.json(ciudad);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar la ciudad" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 API Mock Server corriendo en http://localhost:${PORT}`);
  console.log(`📊 Endpoint: http://localhost:${PORT}/api/`);
  console.log(`🌍 Total de ciudades cargadas: ${ciudades.length}`);
});
