import React from 'react';
import Image from '../../Atoms/Image/Image';
import { Link } from 'react-router-dom';

const Navbar = ({ src }) => {
  return (
    <Link to='/' >
      <Image src={src} />
    </Link>
  );
}

export default Navbar;
