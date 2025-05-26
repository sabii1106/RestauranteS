import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Restaurante from './Componentes/Restaurante';
const urlImagen1="https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg";
const restaurantes = [{nombre:"El Redil", direccion:"Shyris y Matamoros", tipo:"Tradicional", urlImagen:"https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg"},{nombre:"Cafeteria", direccion:"Julio Cesar Villacres y N68F", tipo:"Cafeteria", urlImagen:"https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg"}, {nombre:"Restaurante los Pedrosa", direccion:"Presa y Zamora", tipo:"Comida Rápida", urlImagen:"https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg"}];

function App() {
  const [likesTotales, setLikesTotales] = useState(0);
  const SumarLikes = ()=> setLikesTotales(prev => prev + 1);
  const RestarDislikes = ()=> setLikesTotales(prev => prev - 1);
  return (
    <div className="App">
      <h1>Cantidad likes: {likesTotales}</h1>

      {
        restaurantes.map((restaurante,index)=>{
          return <Restaurante key = {index} nombre = {restaurante.nombre} direccion = {restaurante.direccion} tipo = {restaurante.tipo} urlImagen={restaurante.urlImagen} SumarLikes={SumarLikes} RestarDislikes={RestarDislikes}></Restaurante>
        })
      }
    </div>
  );
}

export default App;
