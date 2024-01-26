import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedLogo = () => {
    const { x, color } = useSpring({
        to: async (next, cancel) => {
          while (1) {
            await next({ x: 100, color: 'blue' });
            await next({ x: 0, color: 'yellow' });
          }
        },
        from: { x: 0, color: 'black' },
        config: { duration: 2000 },
      });
    
      return (
        <div>
          <animated.div
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: color,
              transform: x.interpolate((val) => `translateX(${val}px)`),
            }}
          />
          <animated.div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: color,
              transform: x.interpolate((val) => `translateX(-${val}px)`),
            }}
          />
        </div>
      );
    
};

export default AnimatedLogo;