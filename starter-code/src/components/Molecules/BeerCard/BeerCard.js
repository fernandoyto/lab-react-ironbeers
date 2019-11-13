import React from 'react';
import Image from '../../Atoms/Image/Image';
import Title from '../../Atoms/Title/Title';
import Subtitle from '../../Atoms/Subtitle/Subtitle';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import { Link } from 'react-router-dom';

const BeerCard = ({ src, title, subtitle, linkTo, cardClass, text, style }) => {
  return (
    <div className={cardClass}>
      <Link to={linkTo} >
        <Image src={src} style={style} />
        <div>
          <Title title={title} ></Title>
          <Subtitle subtitle={subtitle} ></Subtitle>
          <Paragraph text={text} ></Paragraph>
        </div>
      </Link>
    </div>    
  );
}

export default BeerCard;
