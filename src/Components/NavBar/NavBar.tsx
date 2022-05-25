import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="navBar">
      <div className="name">AMANDA ANDERSON</div>
      <div className="navLink">
        <div className="link">
          <Link to="/">ABOUT</Link>
        </div>
        <div className="link">
          <Link to="/portfolio">PORTFOLIO</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
