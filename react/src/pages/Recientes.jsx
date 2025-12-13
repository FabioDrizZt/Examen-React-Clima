import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Recientes() {
  return (
    <div className="recientes">
      <div className="container">
        <h2 className="page-title">Consultas Recientes</h2>

        <ul id="listaHistorial"></ul>
      </div>
    </div>
  );
}

export default Recientes;
