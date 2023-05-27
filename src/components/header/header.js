import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className='navbar'>
      {/* <!-- LOGO --> */}
      <Link href='/' className='logo'>
        <div className='logos'>
          <div>
            <img src='/images/logo.png' className='logo' />
          </div>
          <div className='logo_text'>Ugwu Leonard</div>
        </div>
      </Link>
      {/* <!-- NAVIGATION MENU --> */}
      <ul className='nav-links'>
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
                <Link href='/'>Novels</Link>
              </li>
              <li>
                <Link href='/'>Essays</Link>
              </li>
              <li>
                <Link href='/'>Short Stories</Link>
              </li>
              <li>
                <Link href='/'>Poems</Link>
              </li>
              <li>
                <Link href='/'>Plays</Link>
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
