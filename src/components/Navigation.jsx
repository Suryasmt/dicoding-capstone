import React, { useState } from "react";
import { auth } from "../config/firebase";
import BrandLogo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineSetting } from "@react-icons/all-files/ai/AiOutlineSetting";
import { RiCustomerService2Line } from "@react-icons/all-files/ri/RiCustomerService2Line";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import userImg from "../assets/profile-user.png";
import { signOut } from "firebase/auth";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import { UserContext } from "../config/context/context";

const Navigation = () => {
  const [isMobile, setMobile] = useState(false);
  const [dropdownUser, setDropdownUser] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setDropdownUser(false);
      })
      .catch((err) => {
        console.error(err);
        setDropdownUser(false);
      });
  };

  const handleHamburgerMenu = () => {
    setMobile(!isMobile);
    setDropdownUser(false);
  };

  const handleDropdownUser = () => {
    setDropdownUser(!dropdownUser);
    setMobile(false);
  };
  console.log(user)

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
        // onClick={() => setMobile(false)}
      >
        <li  onClick={() => setMobile(false)} className="navbar-link__item">
          <Link to="/">Home</Link>
        </li>
        <li onClick={()=> {setMobile(true)}} className="navbar-link__item">
          <NavDropdown  title="Kehamilan" id="basic-nav-dropdown">
            <NavDropdown.Item href="/trimester1">Trimester 1</NavDropdown.Item>
            <NavDropdown.Item href="/trimester2">Trimester 2</NavDropdown.Item>
            <NavDropdown.Item href="/trimester3">Trimester 3</NavDropdown.Item>
          </NavDropdown>
        </li>
        <li  onClick={() => setMobile(false)} className="navbar-link__item">
          <Link to="/artikel">Pola Asuh</Link>
        </li>
        <li  onClick={() => setMobile(false)} className="navbar-link__item">
          <Link to="/about">About</Link>
        </li>
      </ul>

      {user ? (
        <div
          onClick={handleDropdownUser}
          className={
            dropdownUser
              ? "frame-icon-user icon-user-active"
              : "frame-icon-user"
          }
        >
          <AiOutlineUser className="icon-user_ai" />
        </div>
      ) : (
        <button onClick={() => navigate("/login")} className="btn-login">
          Masuk
        </button>
      )}

      <div
        className={
          dropdownUser ? "user-dropdown user-dropdown-active" : "user-dropdown"
        }
      >
        <div className="dropdown-item_user">
          <div className="photo-user">
            <img
              src={user?.photoURL === null ? userImg : user?.photoURL}
              alt="userphoto"
            />
          </div>
          <p>{user?.email}</p>
        </div>

        <div>
          <hr />
        </div>

        <ul className="dropdown-item_list">
          <li>
            <AiOutlineSetting className="list-user-icon" /> Setting
          </li>
          <li>
            <RiCustomerService2Line className="list-user-icon" /> Chat Admin
          </li>
          <li onClick={handleLogout}>
            <BiLogOut className="list-user-icon" /> Keluar
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
