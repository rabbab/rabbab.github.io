import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import "../../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const toggleSubmenu = () => setShowSubmenu(!showSubmenu);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src="../img/logo-ps.png" alt="logo" />
        </NavLink>
      </div>
      <ul className={showMenu ? "navbar-menu active" : "navbar-menu"}>
        <li className="navbar-item">
          <HashLink to="/#home">Home</HashLink>
        </li>
        <li className="navbar-item">
          <HashLink to="/#about">About</HashLink>
        </li>
        <li className="navbar-item">
          <HashLink to="/#skills">Skills</HashLink>
        </li>

        {/* <li className="navbar-item dropdown">
          <NavLink to="#" onClick={toggleSubmenu}>
            Skills
            {showSubmenu ? (
              <FaAngleUp className="dropdown-icon" />
            ) : (
              <FaAngleDown className="dropdown-icon" />
            )}
          </NavLink>
          <ul
            className={showSubmenu ? "dropdown-menu active" : "dropdown-menu"}
          >
            <li className="dropdown__item">
              <NavLink to="#">Php</NavLink>
            </li>
            <li className="dropdown__item">
              <NavLink to="#">JavaScript</NavLink>
            </li>
            <li className="dropdown__item">
              <NavLink to="#">React</NavLink>
            </li>
            <li className="dropdown__item">
              <NavLink to="#">Wordpress</NavLink>
            </li>
            <li className="dropdown__item">
              <NavLink to="#">Magento</NavLink>
            </li>
          </ul>
        </li> */}
        <li className="navbar-item">
          <HashLink to="/#contact">Contact</HashLink>
        </li>
        <li className="navbar-item">
          <HashLink smooth to="/#experience">
            Portfolio
          </HashLink>
        </li>
        {/* <li className="navbar-item">
          <HashLink smooth to="/#projects">
            Projects
          </HashLink>
        </li> */}
        <li className="navbar-item">
          <HashLink smooth to="/#services">
            Services
          </HashLink>
        </li>
        <li className="navbar-item">
          <HashLink to="/#timeline">TimeLine</HashLink>
        </li>
      </ul>
      <div className="email-icon">
        <div className="social-media-navbar">
          <NavLink to="https://www.linkedin.com/in/rababfatima94/">
            <FaLinkedin />
          </NavLink>
          <NavLink to="https://github.com/rabbab">
            <FaGithub />
          </NavLink>
        </div>
        <div className="email">
          <div className="mail">
            <FiMail />
          </div>
          <Link to="mailto:rabbab94@gmail.com"> Email</Link>
        </div>
      </div>

      <button className="navbar-icon" onClick={toggleMenu}>
        {!showMenu ? (
          <FaBars className="menu-icon" />
        ) : (
          <FaTimes className="cross-icon" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
