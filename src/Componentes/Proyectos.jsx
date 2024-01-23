import React from 'react';
import githubIcon from '../assets/icono1/github-icon.svg'; 
import img from '../assets/img-gonza.jpg';

const Tarjeta = () => {
return (
    <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center mb-8">
    <img src={img} alt="proyecto" className="w-60 h-50 mb-4 mx-auto -full" />
    <h1 className="text-2xl md:text-4xl font-bold mb-2 text-blue-950">Titulo</h1>
    <h4 className="text-gray-600 mb-4">Descripcion Breve</h4>
    <a href="https://github.com/Gonzaloarin12" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
    </a>
    </div>
);
};

const App = () => {
return (
    <div className='bg-gray-800 text-white min-h-screen grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center p-4 md:p-8'>
    {[...Array(6)].map((_, index) => (
        <Tarjeta key={index} />
    ))}
    </div>
    );
};

export default App;