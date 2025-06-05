import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import WrapperRestaurante from './Componentes/WrapperRestaurante';
import Inicio from './Componentes/Inicio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/*" element={<WrapperRestaurante />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

