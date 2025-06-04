
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListaRestaurantes from './Componentes/ListaRestaurantes';
import CrearRestaurante from './Componentes/CrearRestaurante';
import Inicio from './Componentes/Inicio';
function App() {
    
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element = {<Inicio/>}/>    
        <Route path={"/lista"} element = {<ListaRestaurantes/>}/>    
        <Route path={"/crear"} element = {<CrearRestaurante/>}/>    
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

