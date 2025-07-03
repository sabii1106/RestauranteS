import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListaRestaurantes from "./Componentes/ListaRestaurantes";
import CrearRestaurante from "./Componentes/CrearRestaurante";
import ComponenteAxios from './Componentes/ComponeteAxios';
import Inicio from './Componentes/Inicio';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [state, setState] = useState({
    nombre: "",
    direccion: "",
    tipo: "",
    reputacion: "",
    UrlImagen: "",
  });

  useEffect(() => {
    obtenerRestaurantesClientes();
  }, []);

  const obtenerRestaurantesClientes = () => {
    axios.get('http://localhost:3000/restaurantes')
      .then(response => {
        setRestaurantes(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los restaurantes:", error);
      });
  };

  const agregarRestaurante = (nuevoRestaurante) => {
    axios.post('http://localhost:3000/restaurantes', nuevoRestaurante)
      .then(response => {
        setRestaurantes(prev => [...prev, response.data]);
      })
      .catch(error => {
        console.error("Error al agregar el restaurante:", error);
      });
  };

  const actualizarRestaurante = (id, restauranteActualizado) => {
    axios.put(`http://localhost:3000/restaurantes/${id}`, restauranteActualizado)
      .then(response => {
        setRestaurantes(prev =>
          prev.map(r => r.id === id ? response.data : r)
        );
      })
      .catch(error => {
        console.error("Error al actualizar el restaurante:", error);
      });
  };

  const eliminarRestaurante = (id) => {
    axios.delete(`http://localhost:3000/restaurantes/${id}`)
      .then(() => {
        setRestaurantes(prev =>
          prev.filter(restaurante => restaurante.id !== id)
        );
      })
      .catch(error => {
        console.error("Error al eliminar el restaurante:", error);
      });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
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
          <Route
            path="/lista"
            element={
              <ListaRestaurantes
                restaurantes={restaurantes}
                handleEliminar={eliminarRestaurante}
                actualizarRestaurante={actualizarRestaurante}
                setState={setState} // <-- AGREGA ESTA LÍNEA
              />
            }
          />
          <Route path="/axios" element={<ComponenteAxios />} />
          <Route
            path="/actualizar/:id"
            element={
              <CrearRestaurante
                state={state}
                setState={setState}
                onActualizar={actualizarRestaurante}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
