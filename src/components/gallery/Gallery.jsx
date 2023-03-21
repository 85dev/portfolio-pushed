import React from 'react';
import './gallery.css';

function Gallery() {
  function getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomColor() {
      const r = getRandomValue(0, 255);
      const g = getRandomValue(0, 255);
      const b = getRandomValue(0, 255);
      return `rgb(${r}, ${g}, ${b})`;
  }

  function generateTiles() {
      const tiles = [];
      for (let i = 0; i < 20; i++) {
          const style = {
              width: `${getRandomValue(10, 30)}%`,
              height: `${getRandomValue(10, 30)}%`,
              top: `${getRandomValue(0, 240)}%`,
              left: `${getRandomValue(10, 90)}%`,
              backgroundColor: getRandomColor(),
              borderRadius: `${10}px`,
              position: 'absolute',
          };
          tiles.push(<div className="tile" style={style} key={i} />);
      }
      return tiles;
  }

  const tiles = generateTiles();

  return <div className='gallery'>{tiles}</div>
}

export default Gallery;
