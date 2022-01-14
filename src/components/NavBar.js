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
      size="55px"
      onClick={() => setMenuOpen(!menuOpen)}
    />;

  const closeIcon = 
    <AiOutlineCloseSquare 
      className="close"
      size="55px"
      onClick={() => setMenuOpen(!menuOpen)}
    />;
  return (
    <header 
      className="nav-main dark-mode"
    >
      <div className="nav-container">
        <nav className="nav-large">
          <NavLink 
            to='/' 
            exact
            className="navlink-src mono-title"
          >
            HOME
          </NavLink>
          <NavLink 
            to="/post"
            className="navlink mono"
          >
            Blog Posts
          </NavLink>
          <NavLink 
            to="/project"
            className="navlink mono"
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about"
            className="navlink mono"
          >
            About Me
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
            exact
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
            className="icon mr-4"
            target="_blank" 
            fgColor="#fff" style={{ height: 45, width: 45 }}
          />
          <SocialIcon 
            url="https://github.com/KaePistachio" 
            className="icon mr-4" 
            target="_blank" 
            fgColor="#fff" style={{ height: 45, width: 45 }}
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
