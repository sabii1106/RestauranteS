import './App.css';
import React, {useState} from "react";
import Restaurante from './Componentes/Restaurante';
import CrearRestaurante from './Componentes/CrearRestaurante';

function App() {
  const [restaurantes, setRestaurantes] = useState([
    {nombre:"El Redil", direccion:"Shyris y Matamoros", tipo:"Tradicional", reputacion:1},
    {nombre:"Cafeteria", direccion:"Julio Cesar Villacres y N68F", tipo:"Cafeteria", reputacion:2}, 
    {nombre:"Restaurante los Pedrosa", direccion:"Presa y Zamora", tipo:"Comida Rápida", reputacion:5}
  ]);

  const [mensajeErrorLikesNegativos, setMensajeErrorLikesNegativos] = useState("");

  const [likesTotales, setLikesTotales] = useState(0);

  const [state, setState] = React.useState({
    nombre: "",
    direccion: "",
    tipo: "",
    reputacion: ""
  });

  const agregarRestaurantes = (nuevoRestaurante) =>{
    setRestaurantes(prev => [...prev, nuevoRestaurante]);
  }

  const SumarLikes = ()=> {
    setLikesTotales(prev => prev + 1);
  }

  const RestarDislikes = ()=> {
    if (likesTotales <= 0) {
      mensajeErrorLikesNegativo("No se puede restar más likes");
      return; 
    } 
    setLikesTotales(prev => prev - 1);
  }
      
  const mensajeErrorLikesNegativo = (mensaje) => {
    setMensajeErrorLikesNegativos(mensaje);
    setTimeout(() => {
      setMensajeErrorLikesNegativos("");
    }, 3000);
  };
    
  return (
    <div className="App">
      <h1>Cantidad likes: {likesTotales}</h1>
      {mensajeErrorLikesNegativos && <h2 style={{color:"red"}}>{mensajeErrorLikesNegativos}</h2>}
      {
        restaurantes.map((restaurante,index)=>{
          return <Restaurante key = {index} nombre = {restaurante.nombre} direccion = {restaurante.direccion} tipo = {restaurante.tipo} reputacion = {restaurante.reputacion} SumarLikes={SumarLikes} RestarDislikes={RestarDislikes} mensajeErrorLikesNegativo={mensajeErrorLikesNegativo}></Restaurante>
        })
      }
      <CrearRestaurante state={state} setState={setState} agregarRestaurante={agregarRestaurantes} />
    </div>
  );
}

export default App;
