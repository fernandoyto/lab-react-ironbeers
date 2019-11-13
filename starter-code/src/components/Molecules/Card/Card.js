import React from 'react';
import Image from '../../Atoms/Image/Image';
import Title from '../../Atoms/Title/Title';
import Subtitle from '../../Atoms/Subtitle/Subtitle';
import { Link } from 'react-router-dom';

const Card = ({ src, title, subtitle, linkTo, cardClass }) => {
  return (
    <div className={cardClass}>
      <Link to={linkTo} >
        <Image src={src} />
        <Title title={title} ></Title>
        <Subtitle subtitle={subtitle} ></Subtitle>
      </Link>
    </div>    
  );
}

export default Card;
