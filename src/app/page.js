import React from 'react';
import Link from 'next/link';
import BookAd from '../components/bookDisplay/bookAd';
import './page.css';

export default function Home() {
  return (
    <main>
      <div className='home_banner'>
        <div>
          <div className='text_author'>Author</div>

          <div className='author_name'>Ugwu Leonard</div>

          <Link href='/about'>
            <button>Read More</button>
          </Link>
        </div>
        <img src='/images/home_image.png' alt='book' className='home_image' />
      </div>

      <div className='section2_home'>
        <div>
          <img src='/images/home_image.png' alt='book' className='home_image' />
        </div>
        <div>
          <div className='author_book'>Echoes of Bullets</div>
          <Link href='/books'>
            <button>See More</button>
          </Link>
        </div>
      </div>

      <div className='section3_home'>
        <BookAd />

        <div className='about_in_home'>
          <div>
            <div className='text_author'>About author</div>
            <div className='author_name'>Ugwu Leonard</div>
            <div className='brief_summary'>
              It all became a flickering light when Leonard Jr. won the best
              poet of the year twice in 2012 and 2013 from the Caritas
              University Literary and Arts Association (CAULAA). During his
              first Degree in Caritas University Enugu, his name echoed all over
              the Institution because of his poetry renditions in notable events
              and festivals hosted around the school, they gave him a name
              'Leonard is Back' – a name carved out of one of his poetic
              renditions titled 'Leonard is Back' – the poetry rendition had the
              audience chorusing the word 'Leonard is Back' found at the end of
              each verse of the poem.
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
