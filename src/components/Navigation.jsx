import React, { useState } from 'react';
import ButtonLogin from './ButtonLogin';
import BrandLogo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

const Navigation = () => {
  const [isMobile, setMobile] = useState(false);

  return (
    <nav className='navbar'>
      <div className='brand-logo'>
        <img src={BrandLogo} alt='Logo Smart Parent'></img>
      </div>
      <ul className={isMobile ? 'nav-links nav-links-mobile' : 'nav-links'}
      onClick={() => setMobile(false)}>
        <li className='link-item'>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li className='link-item'>
          <Link to='/kalkulator'>
            Kalkulator
          </Link>
        </li>
        <li className='link-item'>
          <Link to='/forum'>
            Forum
          </Link>
        </li>
        <li className='link-item'>
          <Link to='/artikel'>
            Artikel
          </Link>
        </li>
        <li className='link-item'>
          <Link to='/about'>
            About
          </Link>
        </li>
        <ButtonLogin name='Masuk'/>
      </ul>
      <button className='mobile-menu-icon'
        onClick={() => 
        setMobile(!isMobile)
        }>
        {isMobile ? <AiOutlineClose /> :  <FiMenu />}
      </button>
    </nav>
  )
}

export default Navigation;
