import React from 'react';
import './Image.css';

const Image = ({ src, style }) => {
  return (
    <div>
      <img src={src} alt='img' className={style} />
    </div>
  );
};

export default Image;
