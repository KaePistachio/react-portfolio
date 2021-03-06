import React, { useState }from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import DropdownMenu from "./DropdownMenu";
import ToggleSwitch from "./ToggleSwitch";

const NavBar = () => {  
  const closeDropdown = () => { setMenuOpen(false) };
  
  const [ menuOpen, setMenuOpen ] = useState(false);

  const hamburgerIcon = 
    <FiMenu 
      className="hamburger"
      //size="35px"
      onClick={() => setMenuOpen(!menuOpen)}
    />;

  const closeIcon = 
    <AiOutlineCloseSquare 
      className="close"
      //size="35px"
      onClick={() => setMenuOpen(!menuOpen)}
    />;
  return (
    <header 
      className="nav-main"
    >
      <div className="nav-container">
        <nav className="nav-large">
          <NavLink 
            to='/' 
            className="navlink-src mono-title"
          >
            HOME
          </NavLink>
          <NavLink 
            to="/about"
            className="navlink mono"
          >
            About Me
          </NavLink>
          <NavLink 
            to="/project"
            className="navlink mono"
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/contact"
            className="navlink mono"
          >
            Contact
          </NavLink>
        </nav>
        <nav className="nav-small">
          <NavLink 
            to='/' 
            className="navlink-src mono-title"
          >
            HOME
          </NavLink>
          { menuOpen ? closeIcon : hamburgerIcon }
          { menuOpen && DropdownMenu }
        </nav>
        <ToggleSwitch />  
        <div className="nav-social">
          <SocialIcon 
            url="https://www.linkedin.com/in/nickwhitedev/" 
            className="icon"
            target="_blank" 
            fgColor="#fff"
          />
          <SocialIcon 
            url="https://github.com/KaePistachio" 
            className="icon" 
            target="_blank" 
            fgColor="#fff"
          />
        </div>
      </div>
      <div className="drop" >
          { menuOpen && <DropdownMenu
            isMobile={true}
            closeDropdown={closeDropdown}
          /> }
    </div>
    </header>
    )
}

export default NavBar;
