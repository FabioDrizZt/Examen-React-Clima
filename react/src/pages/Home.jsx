import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="container">
        <h2 className="page-title">Consulta el Clima</h2>

        <form>
          <label htmlFor="ciudades">Seleccione una ciudad:</label>
          <select id="ciudades" name="ciudades"></select>
          <button type="submit">Consultar Clima</button>
        </form>

        <h2>Historial de Consultas</h2>
        <ul id="listaHistorial"></ul>
      </div>
    </div>
  );
}

export default Home;
