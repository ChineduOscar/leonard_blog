import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
<<<<<<< HEAD
import ReactSlider from '../components/slider/slider';
=======
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
import BookAd from '../components/bookDisplay/bookAd';
import './page.css';

export default function Home() {
  return (
    <main>
<<<<<<< HEAD
      <ReactSlider />
=======
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
      <div className='home_banner'>
        <div>
          <div className='text_author'>Author</div>

<<<<<<< HEAD
          <div className='author_name'>Ugwu Leonard, Jr</div>
=======
          <div className='author_name'>Ugwu Leonard</div>
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185

          <Link href='/about'>
            <button>Read More</button>
          </Link>
        </div>
        <img src='/images/home_image.png' alt='book' className='home_image' />
      </div>

<<<<<<< HEAD
      {/* <div className='section2_home'>
=======
      <div className='section2_home'>
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
        <div>
          <img src='/images/home_image.png' alt='book' className='home_image' />
        </div>
        <div>
          <div className='author_book'>Echoes of Bullets</div>
          <Link href='/books'>
            <button>See More</button>
          </Link>
        </div>
<<<<<<< HEAD
      </div> */}
=======
      </div>
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185

      <div className='section3_home'>
        <BookAd />

        <div className='about_in_home'>
          <div>
            <div className='text_author'>About author</div>
<<<<<<< HEAD
            <div className='author_name'>Ugwu Leonard,Jr</div>
=======
            <div className='author_name'>Ugwu Leonard</div>
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
            <div className='brief_summary'>
              {/* &rsquo; means - ' */}
              It all became a flickering light when Leonard Jr. won the best
              poet of the year twice in 2012 and 2013 from the Caritas
              University Literary and Arts Association (CAULAA). During his
              first Degree in Caritas University Enugu, his name echoed all over
              the Institution because of his poetry renditions in notable events
              and festivals hosted around the school, they gave him a name
              &rsquo;Leonard is Back&rsquo; – a name carved out of one of his
              poetic renditions titled &rsquo;Leonard is Back&rsquo; – the
              poetry rendition had the audience chorusing the word
              &rsquo;Leonard is Back&rsquo; found at the end of each verse of
              the poem.
            </div>
            <Link href='/about'>
              <button>Read More</button>
            </Link>
          </div>
          <img
            src='/images/ugwu.jpeg'
            alt='author image'
            className='home_about_image'
          />
        </div>
      </div>
    </main>
  );
}
