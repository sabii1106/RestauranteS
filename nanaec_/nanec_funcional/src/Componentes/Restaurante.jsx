import React from 'react';
import './Restaurante.css';

function Restaurante({
  id,
  nombre,
  direccion,
  tipo,
  UrlImagen,
  reputacion,
  SumarLikes,
  RestarDislikes,
  mensajeErrorLikesNegativo,
  handleEliminar,
  handleActualizar
}) {
  const onEliminar = () => {
    if (window.confirm("¿Estás seguro de eliminar este restaurante?")) {
      handleEliminar(id);
    }
  };

  return (
    <div className="Restaurante">
      <img src={UrlImagen} alt={nombre} />
      <h1>{nombre}</h1>
      <h3>{direccion}</h3>
      <h4>{tipo}</h4>
      <h4>Reputación: {"⭐".repeat(reputacion)}</h4>
      <button onClick={SumarLikes}>👍</button>
      <button onClick={RestarDislikes}>👎</button>
      {mensajeErrorLikesNegativo && (
        <p style={{ color: "red" }}>{mensajeErrorLikesNegativo}</p>
      )}
      <button onClick={onEliminar}>Eliminar</button>
      <button onClick={() => handleActualizar(id)}>Actualizar</button>
    </div>
  );
}

export default Restaurante;
