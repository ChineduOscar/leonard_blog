import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className='nav_bar'>
      {/* <!-- LOGO --> */}
      <Link href='/' className='logo'>
        <div className='logos'>
          <div>
            <img alt='logo' src='/images/logo.png' className='logo' />
          </div>
          <div className='logo_texts'>
            <div className='logo_text'>Ugwu Leonard, jr</div>
            <div className='logo_subtext'>Author</div>
          </div>
        </div>
      </Link>
      {/* <!-- NAVIGATION MENU --> */}
      <ul className='nav_links'>
        {/* <!-- USING CHECKBOX HACK --> */}
        <input type='checkbox' id='checkbox_toggle' />
        <label htmlFor='checkbox_toggle' className='hamburger'>
          &#9776;
        </label>
        {/* <!-- NAVIGATION MENUS --> */}
        <div className='menu'>
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
                <Link href='/'>Essay/Article</Link>
              </li>
              <li>
                <Link href='/'>Short Stories</Link>
              </li>
              <li>
                <Link href='/'>Poems</Link>
              </li>
              <li>
                <Link href='/'>Mini Play</Link>
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
