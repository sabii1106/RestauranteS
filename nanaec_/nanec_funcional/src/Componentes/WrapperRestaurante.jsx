import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ListaRestaurantes from "./ListaRestaurantes";
import CrearRestaurante from "./CrearRestaurante";

function WrapperRestaurante({
  restaurantes,
  setRestaurantes,
  state,
  setState
}) {
  const [mensajeErrorLikesNegativos, setMensajeErrorLikesNegativos] = useState("");
  const [likesTotales, setLikesTotales] = useState(0);

  const agregarRestaurante = (nuevoRestaurante) => {
    setRestaurantes((prev) => [...prev, nuevoRestaurante]);
  };

  const SumarLikes = () => setLikesTotales((prev) => prev + 1);

  const RestarDislikes = () => {
    if (likesTotales <= 0) {
      mensajeErrorLikesNegativo("No se puede restar más likes");
      return;
    }
    setLikesTotales((prev) => prev - 1);
  };

  const mensajeErrorLikesNegativo = (mensaje) => {
    setMensajeErrorLikesNegativos(mensaje);
    setTimeout(() => setMensajeErrorLikesNegativos(""), 3000);
  };

  return (
    <Routes>
      <Route
        path="/lista"
        element={
          <ListaRestaurantes
            restaurantes={restaurantes}
            SumarLikes={SumarLikes}
            RestarDislikes={RestarDislikes}
            mensajeErrorLikesNegativo={mensajeErrorLikesNegativo}
            mensajeErrorLikesNegativos={mensajeErrorLikesNegativos}
            likesTotales={likesTotales}
          />
        }
      />
      <Route
        path="/crear"
        element={
          <CrearRestaurante
            state={state}
            setState={setState}
            agregarRestaurante={agregarRestaurante}
          />
        }
      />
    </Routes>
  );
}

export default WrapperRestaurante;

