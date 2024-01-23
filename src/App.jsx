import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Body from './Componentes/Body';
import Sobremi from './Componentes/Sobremi';
import Proyectos from './Componentes/Proyectos'
import Habilidades from './Componentes/Habilidades';
import Contacto from './Componentes/Contacto';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-full md:flex-row">
        {/* Navbar con ancho máximo de 10rem y fondo que cubre toda la página */}
        <div className="bg-gray-900 text-white p-4 flex items-center justify-center md:flex-col md:w-10rem">
          <Navbar />
        </div>

        {/* Contenido principal (Body) ocupando el resto de la página */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/sobremi" element={<Sobremi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* Agrega más rutas según sea necesario */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;