import React from 'react';
import Image from 'next/image';
import style from '../../app/globals.css';

const Footer = () => {
  return (
    <footer>
      <div className='social-icons'>
        <a href='https://www.facebook.com/xcshertchgxdfas'>
          <img
            src='/images/facebook.png'
            alt='social icon'
            className='socials'
          />
        </a>
        <a href='https://instagram.com/ugwuleonardelvis?igshid=bu7r0457z8ry'>
          <img
            src='/images/instagram.png'
            alt='social icon'
            className='socials'
          />
        </a>
        <a href='https://twitter.com/UgwuJr1?t=w4fXGCbkmV0TMYo0hC-V9w&s=08'>
          <img
            src='/images/twitter.png'
            alt='social icon'
            className='socials       '
          />
        </a>
        <a href='https://medium.com/@leonardugwujr/'>
          <img
            src='/images/Medium.png'
            alt='social icon'
            className='socials medium'
          />
        </a>
      </div>
      <div>© 2023 Ugwu Leonard</div>
    </footer>
  );
};

export default Footer;
