import { createContext, useState, useEffect } from "react";

export const HistorialConsultasContext = createContext();

export function HistorialConsultasProvider({ children }) {
  const agregarConsulta = (id, nombre) => {};

  const limpiarHistorial = () => {};

  return (
    <HistorialConsultasContext.Provider value={{}}>
      {children}
    </HistorialConsultasContext.Provider>
  );
}
