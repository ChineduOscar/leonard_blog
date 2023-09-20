'use client';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ReactSlider = () => {
  return (
    <div className='demo-carousel'>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        emulateTouch
        transitionTime={500}
        stopOnHover={false}
        dynamicHeight={false}
        swipeable
        showThumbs={false}
        interval={3500}
      >
        <div>
          <div className='img_container'>
            <img
              src='./images/slide1.jpg'
              alt='book'
              style={{ maxWidth: '60%', height: '100%' }}
            />
          </div>
        </div>
        <div>
          <div className='img_container'>
            <img
              src='./images/slide2.jpeg'
              alt='book'
              className='slide_img'
              style={{ maxWidth: '60%', height: '100%' }}
            />
          </div>
          <p className='legend'>Echoes of Bullets</p>
        </div>
        <div>
          <div className='img_container'>
            <img
              src='./images/echoes_of_the_invisible.png'
              alt='book'
              style={{ maxWidth: '60%', height: '100%', zIndex: -1 }}
            />
          </div>
          <p className='legend'>Echoes of the invisible</p>
        </div>
        <div>
          <div className='img_container'>
            <img
              src='./images/slide4.jpg'
              alt='book'
              style={{ maxWidth: '60%', height: '100%' }}
            />
          </div>
          <p className='legend'>Babel and Boys</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ReactSlider;
