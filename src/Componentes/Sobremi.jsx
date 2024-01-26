import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/img-gonza.jpg';
import pdfFile from '../assets/CV-GonzaloArin.pdf';
import './Sobremi.css'; 

const Sobremi = () => {
  const descargarCV = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'CV-GonzaloArin.pdf';
    link.click();
  };

  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col items-center justify-center">
      <motion.img
        src={img}
        alt="Imagen de Gonzalo Arin"
        className="w-64 h-64 mb-4 rounded-full object-cover animate-fadeIn"
        whileHover={{ rotate: -360, boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)' }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1 className=" text-3xl font-bold mb-4" whileHover={{ scale: 1.1 }}>
        HOLA SOY GONZALO ARIN
      </motion.h1>
      <motion.h3
        className="text-2xl m-16 text-center font-bold font-mono capitalize"
        whileHover={{ color: '#FFD700' }}
        transition={{ duration: 0.3 }}
      >
        Soy un apasionado del desarrollo web y la tecnología. Siempre estoy buscando aprender y crecer en nuevas tecnologías. Mi enfoque incluye formación técnica, exploración constante de herramientas y adaptabilidad. Puedes explorar mi portafolio para conocerme un poco más.
      </motion.h3>
      <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-black animate-bounce animate-delay-500" onClick={descargarCV}>
        Descargar CV
      </button>
    </div>
  );
};

export default Sobremi;