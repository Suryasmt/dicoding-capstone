import React, { useState } from 'react';
import BrandLogo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { UserAuth } from "../config/authContext";

const Navigation = () => {
  const [isMobile, setMobile] = useState(false);

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
      </ul>
      {user?.email ? (
          <div className="login">
            <button onClick={handleLogout} className="btn-login">
              Logout
            </button>
          </div>
        ) : (
          <div className="login">
            <Link to="/login">
              <button className="btn-login">Masuk</button>
            </Link>
          </div>
        )}
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
