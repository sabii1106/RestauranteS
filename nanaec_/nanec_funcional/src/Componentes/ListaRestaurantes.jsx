
import Restaurante from './Restaurante';
import {Link, useNavigate} from 'react-router-dom';
function ListaRestaurantes({
  restaurantes,
  SumarLikes,
  RestarDislikes,
  mensajeErrorLikesNegativo,
  mensajeErrorLikesNegativos,
  likesTotales
}) 
  {
    
  const navigate = useNavigate();

  const handleInicio = () => {
    navigate("/");  
  }
  const handleCrear = () => {
    navigate("/crear");
  }
  return (
    <div className="ListaRestaurantes">
      <p>Se utiliza el hook useNavigate</p>
      <button onClick={handleInicio}>Volver al incio</button>
      <button onClick={handleCrear}>Crear un nuevo Restaurante</button>
      <br /><br />
      <p>Se utiliza Link</p>
      <Link to="/">
                <button>Volver al Inicio</button>
      </Link>
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
