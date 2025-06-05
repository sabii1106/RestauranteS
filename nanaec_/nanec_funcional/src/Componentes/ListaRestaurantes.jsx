import React from "react";
import Restaurante from './Restaurante';

function ListaRestaurantes({
  restaurantes,
  SumarLikes,
  RestarDislikes,
  mensajeErrorLikesNegativo,
  mensajeErrorLikesNegativos,
  likesTotales
}) {
  return (
    <div className="ListaRestaurantes">
      <h1>Cantidad likes: {likesTotales}</h1>
      {mensajeErrorLikesNegativos && (
        <h2 style={{ color: "red" }}>{mensajeErrorLikesNegativos}</h2>
      )}
      {restaurantes.map((restaurante, index) => (
        <Restaurante
          key={index}
          nombre={restaurante.nombre}
          direccion={restaurante.direccion}
          tipo={restaurante.tipo}
          reputacion={restaurante.reputacion}
          UrlImagen={restaurante.UrlImagen}
          SumarLikes={SumarLikes}
          RestarDislikes={RestarDislikes}
          mensajeErrorLikesNegativo={mensajeErrorLikesNegativo}
        />
      ))}
    </div>
  );
}

export default ListaRestaurantes;
