import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../assets/icono1/github-icon.svg'; 
import linkedinIcon from '../assets/icono1/linkedin-icon.svg'; 
import instagramIcon from '../assets/icono1/instagram-icon.svg'; 
import AnimatedLogo from './Logoanimado';

function Navbar() {
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleMouseEnter = (tab) => {
    setHoveredTab(tab);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <div className="bg-gray-900 text-white p-4 flex flex-col items-center h-full">
      <AnimatedLogo />
      <div></div>

      <div className="text-center flex-1">
        <div className="flex flex-col justify-center items-center space-y-2 h-full gap-6">
          <h1
            className={`text-lg font-bold uppercase transition-all transform ${
              hoveredTab === 'sobremi' ? 'hover:text-blue-300 scale-105 pulse' : ''
            }`}
            onMouseEnter={() => handleMouseEnter('sobremi')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/sobremi">SOBRE MI</Link>
          </h1>
          <h1
            className={`text-lg font-bold uppercase transition-all transform ${
              hoveredTab === 'proyectos' ? 'hover:text-blue-300 scale-105 pulse' : ''
            }`}
            onMouseEnter={() => handleMouseEnter('proyectos')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/proyectos">PROYECTOS</Link>
          </h1>
          <h1
            className={`text-lg font-bold uppercase transition-all transform ${
              hoveredTab === 'habilidades' ? 'hover:text-blue-300 scale-105 pulse' : ''
            }`}
            onMouseEnter={() => handleMouseEnter('habilidades')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/habilidades">HABILIDADES TÉCNICAS</Link>
          </h1>
          <h1
            className={`text-lg font-bold uppercase transition-all transform ${
              hoveredTab === 'contacto' ? 'hover:text-blue-300 scale-105 pulse' : ''
            }`}
            onMouseEnter={() => handleMouseEnter('contacto')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/contacto">CONTACTO</Link>
          </h1>
          {/* Iconos y enlaces a redes sociales */}
          <div className="mt-auto flex items-center space-x-4">
            <a href="https://github.com/Gonzaloarin12" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/gonzalo-arin-94b78a198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/gonzaarin00?igsh=a2Nxdjl5YjB6c2Y=" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;