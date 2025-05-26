import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Restaurante from './Componentes/Restaurante';
const urlImagen1="https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg";
const restaurantes = [{nombre:"El Redil", direccion:"Shyris y Matamoros", tipo:"Tradicional", urlImagen:"https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg"},{nombre:"Cafeteria", direccion:"Julio Cesar Villacres y N68F", tipo:"Cafeteria", urlImagen:"https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg"}, {nombre:"Restaurante los Pedrosa", direccion:"Presa y Zamora", tipo:"Comida Rápida", urlImagen:"https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg"}];

function App() {
  const [likesTotales, setLikesTotales] = useState(0);
  //validar aqui
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
    
  const [mensajeErrorLikesNegativos, setMensajeErrorLikesNegativos] = useState("");
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
          return <Restaurante key = {index} nombre = {restaurante.nombre} direccion = {restaurante.direccion} tipo = {restaurante.tipo} urlImagen={restaurante.urlImagen} SumarLikes={SumarLikes} RestarDislikes={RestarDislikes} mensajeErrorLikesNegativo={mensajeErrorLikesNegativo}></Restaurante>
        })
      }
      
    </div>
  );
}

export default App;
