import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
<<<<<<< HEAD
    <nav className='nav_bar'>
=======
    <nav className='navbar'>
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
      {/* <!-- LOGO --> */}
      <Link href='/' className='logo'>
        <div className='logos'>
          <div>
            <img alt='logo' src='/images/logo.png' className='logo' />
          </div>
<<<<<<< HEAD
          <div className='logo_texts'>
            <div className='logo_text'>Ugwu Leonard, jr</div>
            <div className='logo_subtext'>Author</div>
          </div>
        </div>
      </Link>
      {/* <!-- NAVIGATION MENU --> */}
      <ul className='nav_links'>
=======
          <div className='logo_text'>Ugwu Leonard</div>
        </div>
      </Link>
      {/* <!-- NAVIGATION MENU --> */}
      <ul className='nav-links'>
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
        {/* <!-- USING CHECKBOX HACK --> */}
        <input type='checkbox' id='checkbox_toggle' />
        <label htmlFor='checkbox_toggle' className='hamburger'>
          &#9776;
        </label>
        {/* <!-- NAVIGATION MENUS --> */}
        <div className='menu'>
<<<<<<< HEAD
=======
                 
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/books'>Books</Link>
          </li>
          <li className='services'>
            <p>Writing</p>
            {/* <!-- DROPDOWN MENU --> */}
            <ul className='dropdown'>
              <li>
<<<<<<< HEAD
                <Link href='/'>Essay/Article</Link>
=======
                <Link href='/'>Novels</Link>
              </li>
              <li>
                <Link href='/'>Essays</Link>
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
              </li>
              <li>
                <Link href='/'>Short Stories</Link>
              </li>
              <li>
                <Link href='/'>Poems</Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href='/'>Mini Play</Link>
=======
                <Link href='/'>Plays</Link>
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
              </li>
            </ul>
          </li>
          <li>
            <Link href='/'>Events</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
