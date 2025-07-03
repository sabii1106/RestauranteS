import Restaurante from './Restaurante';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from "axios";

function ListaRestaurantes({ restaurantes, handleEliminar, actualizarRestaurante, setState }) {
  const [mensajeErrorLikesNegativos, setMensajeErrorLikesNegativos] = useState("");
  const [likesTotales, setLikesTotales] = useState(0);

  const navigate = useNavigate();

  const SumarLikes = () => setLikesTotales((prev) => prev + 1);

  const RestarDislikes = () => {
    if (likesTotales <= 0) {
      setMensajeErrorLikesNegativos("No se puede restar más likes");
      return;
    }
    setLikesTotales((prev) => prev - 1);
    setMensajeErrorLikesNegativos(""); // Limpia el mensaje si la resta es válida
  };

  const handleInicio = () => navigate("/");

  const handleCrear = () => navigate("/crear");

  const handleActualizar = (id) => {
    const restaurante = restaurantes.find(r => r.id === id);
    setState(restaurante); // <-- asegúrate de pasar setState desde App.js
    navigate(`/actualizar/${id}`);
  };

  return (
    <div className="ListaRestaurantes">
      <p>Se utiliza el hook useNavigate</p>
      <button onClick={handleInicio}>Volver al inicio</button>
      <button onClick={handleCrear}>Crear un nuevo Restaurante</button>
      <br /><br />

      <p>Se utiliza Link</p>
      <Link to="/">
        <button>Volver al Inicio (Link)</button>
      </Link>

      <h1>Cantidad likes: {likesTotales}</h1>
      {mensajeErrorLikesNegativos && (
        <h2 style={{ color: "red" }}>{mensajeErrorLikesNegativos}</h2>
      )}

      {restaurantes.map((restaurante) => (
        <Restaurante
          key={restaurante.id}
          id={restaurante.id}
          nombre={restaurante.nombre}
          direccion={restaurante.direccion}
          tipo={restaurante.tipo}
          reputacion={restaurante.reputacion}
          UrlImagen={restaurante.UrlImagen}
          SumarLikes={SumarLikes}
          RestarDislikes={RestarDislikes}
          mensajeErrorLikesNegativo={mensajeErrorLikesNegativos}
          handleEliminar={handleEliminar} // Usa la prop, no una función interna
          handleActualizar={handleActualizar}
        />
      ))}
    </div>
  );
}

export default ListaRestaurantes;
