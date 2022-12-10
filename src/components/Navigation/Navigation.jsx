import React, { useState } from "react";
import BrandLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import NavDropdown from "react-bootstrap/NavDropdown";
import ButtonSigIn from "./nav-properti/ButtonSigIn";

const Navigation = () => {
  const [isMobile, setMobile] = useState(false);
  const [dropdownUser, setDropdownUser] = useState(false);

  const handleHamburgerMenu = () => {
    setMobile(!isMobile);
    setDropdownUser(false);
  };
  

  return (
    <nav className="navigationBar">
      <button className="hamburger-menu" onClick={handleHamburgerMenu}>
        {isMobile ? (
          <AiOutlineClose className="hamburger-icon" />
        ) : (
          <FiMenu className="close-icon" />
        )}
      </button>
      <div className="brand-logo">
        <img src={BrandLogo} alt="Logo Smart Parent" />
      </div>
      <ul
        className={
          isMobile ? "navbar-links navbar-links__mobile" : "navbar-links"
        }
      >
        <li onClick={() => setMobile(false)} className="navbar-link__item">
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => {
            setMobile(true);
          }}
          className="navbar-link__item"
        >
          <NavDropdown title="Kehamilan" id="basic-nav-dropdown">
            <NavDropdown.Item> <Link to="/trimester1">Trimester 1</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to="/trimester2">Trimester 2</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to="/trimester3">Trimester 3</Link></NavDropdown.Item>
          </NavDropdown>
        </li>
        <li onClick={() => setMobile(true)} className="navbar-link__item">
          <NavDropdown title="Pola Asuh" id="basic-nav-dropdown">
            <NavDropdown.Item> <Link to="/ArtikelPg1">Anak dan Pola Asuh</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to="/ArtikelPg2">Kesehatan Anak</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to="/ArtikelPg3">Tumbuh Kembang Anak</Link></NavDropdown.Item>
          </NavDropdown>
        </li>
        <li onClick={() => setMobile(false)} className="navbar-link__item">
          <Link to="/message">LiveChat</Link>
        </li>
        <li onClick={() => setMobile(false)} className="navbar-link__item">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <ButtonSigIn
        setMobile={setMobile}
        dropdownUser={dropdownUser}
        setDropdownUser={setDropdownUser}
      />
    </nav>
  );
};

export default Navigation;
