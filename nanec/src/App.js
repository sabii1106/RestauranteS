import logo from './logo.svg';
import './App.css';
import Restaurante from './Componentes/Restaurante';
const urlImagen1="https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg";
const restaurantes = [{nombre:"El Redil", direccion:"Shyris y Matamoros", tipo:"Tradicional", urlImagen:urlImagen1},{nombre:"Cafeteria", direccion:"Julio Cesar Villacres y N68F", tipo:"Cafeteria", urlImagen:"https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg"}, {nombre:"Restaurante los Pedrosa", direccion:"Presa y Zamora", tipo:"Comida Rápida", urlImagen:"https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg"}]
function App() {
    return (
    <div className="App">
      {
        restaurantes.map((restaurante)=>{
          <Restaurante nombre = {restaurante.nombre} direccion = {restaurante.direccion} tipo = {restaurante.tipo} urlImagen={restaurante.urlImagen}></Restaurante>
        })
      }
    </div>
  );
}

export default App;
