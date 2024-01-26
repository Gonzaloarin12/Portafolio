import React from 'react';
import githubIcon from '../assets/icono1/github-icon2.svg'; 
import img from '../assets/img-programacion.jpg';

const Tarjeta = ({ titulo, descripcion, enlaceGitHub }) => {
  return (
    <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center mb-8">
      <img src={img} alt="proyecto" className="w-60 h-50 mb-4 mx-auto -full" />
      <h1 className="text-2xl md:text-4xl font-bold mb-2 text-blue-950">{titulo}</h1>
      <h4 className="text-gray-600 mb-4">{descripcion}</h4>
      <a href={enlaceGitHub} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
      </a>
    </div>
  );
};

const App = () => {
  return (
    <div className='bg-gray-800 text-white min-h-screen grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center p-4 md:p-8'>
      <Tarjeta titulo="1) PORTAFOLIO " descripcion="Este mismo proyecto, para que puedan ver bien todo el codigo fuente." enlaceGitHub="https://github.com/Gonzaloarin12/Portfolio" />
      <Tarjeta titulo="2) E-COMMERCE" descripcion="E-commerce, Realizado 100% en React.Js y estilado con Talwind.css" enlaceGitHub="https://github.com/Gonzaloarin12/EntregaFinal-GonzaloArin-ReactJs" />
    </div>
  );
};

export default App;
