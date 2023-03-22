import React from 'react';
import logoWhite from '../assets/logo-w.png';
import logoBlack from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = ({ barColor }) => {
  return (
    <div
      className='navbar'
      style={
        barColor === 'White'
          ? { border: 'none', boxShadow: 'none' }
          : {
              borderBottom: '1px solid black',
              boxShadow: '-1px 1px 4px #00000091',
            }
      }
    >
      <div className='space'>
        <Link to={'/'}>
          <img
            className='navLogo'
            src={barColor == 'White' ? logoWhite : logoBlack}
            alt='Dogalicious logo'
          />
        </Link>
      </div>
      <ul className='navPages space'>
        <li>
          <Link to={'/Adopt'} className={`pageLink${barColor}`}>
            Adopt
          </Link>
        </li>
        <li>
          <Link to={'/About'} className={`pageLink${barColor}`}>
            About us
          </Link>
        </li>
      </ul>
      <ul className='navSocials space'>
        <li>
          <a
            className={`contacts navContacts${barColor}`}
            href='https://www.twitter.com'
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            className={`contacts navContacts${barColor}`}
            href='https://www.instagram.com/'
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
