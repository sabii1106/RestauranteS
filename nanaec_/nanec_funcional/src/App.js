import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListaRestaurantes from "./Componentes/ListaRestaurantes";
import CrearRestaurante from "./Componentes/CrearRestaurante";
import ComponenteAxios from './Componentes/ComponeteAxios';
import Inicio from './Componentes/Inicio';
import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const [restaurantes, setRestaurantes] = useState([]);
  // Cargar los restaurantes al iniciar la aplicación
  React.useEffect(() => {
    obtenerRestaurantesClientes();
  }, []);
  
  const obtenerRestaurantesClientes = () => {
    axios.get('http://localhost:3000/restaurantes').then(response => {
      setRestaurantes(response.data);
    });
  };

  const [state, setState] = useState({
    nombre: "",
    direccion: "",
    tipo: "",
    reputacion: "",
    UrlImagen: "",
  });

  const agregarRestaurante = (nuevoRestaurante) => {
    setRestaurantes((prev) => [...prev, nuevoRestaurante]);
  };

  const eliminarRestaurante = (index) => {
    setRestaurantes((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path='/crear' element={
            <CrearRestaurante
            state={state}
            setState={setState}
            agregarRestaurante={agregarRestaurante}
            />
            } 
            />
          <Route
            path="/lista"
            element={
              <ListaRestaurantes
                restaurantes={restaurantes}
                handleEliminar={eliminarRestaurante}
              />
            }
          ></Route>
          <Route path ="/axios" element={<ComponenteAxios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


