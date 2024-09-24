import React, { useState } from 'react'; 

export function Square({ initialColor }) {
  const [color, setColor] = useState(initialColor);

  const colorChange = () => {
    setColor(prevColor => (prevColor === 'red' ? 'green' : 'red'));
  };

  return (
    <div
      className='Square'
      onClick={colorChange}
      style={{ backgroundColor: color, width: '100px', height: '100px' }}
    />
  );
}
