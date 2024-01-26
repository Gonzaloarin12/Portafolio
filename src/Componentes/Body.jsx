import React from 'react';
import img from '../assets/img-gonza.jpg';
import pdfFile from '../assets/CV-GonzaloArin.pdf';



const Sobremi = () => {
  const descargarCV = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'CV-GonzaloArin.pdf';
    link.click();
  };

  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col items-center justify-center">
      <img src={img} alt="Imagen de Gonzalo Arin" className="w-64 h-64 mb-4 rounded-full object-cover animate-fadeIn" />
      <h1 className="text-3xl font-bold mb-4">HOLA SOY GONZALO ARIN</h1>
      <h3 className="text-2xl mb-6 text-center text-gray-300 gap-6  font-roboto font-bold">
        Soy un apasionado del desarrollo web y la tecnología. Siempre estoy buscando aprender y crecer en nuevas tecnologías. Mi enfoque incluye formación técnica, exploración constante de herramientas y adaptabilidad. Puedes explorar mi portafolio para conocerme un poco más.
      </h3>
      <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-black animate-bounce animate-delay-500" onClick={descargarCV}>
        Descargar CV
      </button>
    </div>
  );
};

export default Sobremi;