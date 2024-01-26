import React, { useState } from 'react';

const Habilidades = () => {
  const tecnologias = [
    'JavaScript',
    'ReactJS',
    'HTML',
    'CSS',
    'Sass',
    'Tailwind CSS',
    'Bootstrap',
    'Git',
    'GitHub',
    'Firebase (Backend)',
  ];

  const certificados = [
    { nombre: 'JavaScript', enlace: 'https://www.coderhouse.com/certificados/656a7149c9d5d1bad7882151?lang=es' },
    { nombre: 'Desarrollo Web', enlace: 'https://www.coderhouse.com/certificados/64e93e708c4e095ea2226041?lang=es' },
    { nombre: 'React Js', enlace: 'URL del certificado Desarrollo Web' },
    { nombre: 'Desarollo de Aplicaciones', enlace: 'URL del certificado Desarrollo Web' },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="bg-gray-800 text-white p-8 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Habilidades Técnicas</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tecnologias.map((tecnologia, index) => (
            <div
              key={index}
              className={`bg-gray-700 p-4 rounded-md shadow-md transition-transform transform hover:scale-105 ${
                hoverIndex === index ? 'animate-pulse' : ''
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {tecnologia}
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-bold mt-8 mb-4">Certificados</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificados.map((certificado, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-2">{certificado.nombre}</h2>
              <button
                onClick={() => window.open(certificado.enlace, '_blank')}
                className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-black"
              >
                Ver certificado
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Habilidades;