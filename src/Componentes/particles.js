import Particles from 'particles.js';

const ParticlesComponent = () => {
  // Configuración de las partículas
  const particlesConfig = {
    particles: {
      number: {
        value: 80,
      },
      size: {
        value: 3,
      },
      color: {
        value: '#ffffff',
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
      },
      move: {
        enable: true,
        speed: 4,
      },
    },
  };

  // Inicializar partículas
  const initParticles = () => {
    Particles.init({
      selector: '.particles',
      ...particlesConfig,
    });
  };

  // Inicializar partículas al cargar el componente
  React.useEffect(() => {
    initParticles();
    return () => {
      // Limpia las partículas al desmontar el componente
      Particles.destroy('.particles');
    };
  }, []);

  return <div className="particles" />;
};

export default ParticlesComponent;