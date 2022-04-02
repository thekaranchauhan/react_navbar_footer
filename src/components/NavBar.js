import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import  image  from '../assets/logo.png'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={image} alt="logo"  />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/instructions"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Instructions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/terms"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Terms
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
