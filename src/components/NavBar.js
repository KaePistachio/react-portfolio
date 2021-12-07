import React, { useState }from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import DropdownMenu from "./DropdownMenu";

export default function NavBar() {  
  const [ menuOpen, setMenuOpen ] = useState(false);

  const hamburgerIcon = 
  <FiMenu 
    className="hamburger"
    size="45px"
    onClick={() => setMenuOpen(!menuOpen)}
  />;

  const closeIcon = 
    <AiOutlineCloseSquare 
      className="close"
      size="45px"
      onClick={() => setMenuOpen(!menuOpen)}
    />; 

  const closeDropdown = () => setMenuOpen(false);

  return (
    <header className="nav-main">
      <div className="nav-container">
        <nav className="nav-large">
          <NavLink 
            to='/' 
            exact
            className="navlink-src cursive"
          >
            KayPee
          </NavLink>
          <NavLink 
            to="/post"
            className="navlink serif"
          >
            Blog Posts
          </NavLink>
          <NavLink 
            to="/project"
            className="navlink serif"
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about"
            className="navlink serif"
          >
            About Me
          </NavLink>
          <NavLink 
            to="/contact"
            className="navlink serif"
          >
            Contact
          </NavLink>
        </nav>
        <nav className="nav-small">
          <NavLink 
            to='/' 
            exact
            className="navlink-src cursive"
          >
            KayPee
          </NavLink>
          { menuOpen ? closeIcon : hamburgerIcon }
          { menuOpen && DropdownMenu }
        </nav>
        <div className="nav-social">
          <SocialIcon 
            url="https://www.linkedin.com/in/nickwhitedev/" 
            className="icon mr-4" 
            target="_blank" 
            fgColor="#fff" style={{ height: 35, width: 35 }}
          />
          <SocialIcon 
            url="https://github.com/KaePistachio" 
            className="icon mr-4" 
            target="_blank" 
            fgColor="#fff" style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
      { menuOpen && <DropdownMenu
                      isMobile={true}
                      closeDropdown={closeDropdown}
                    /> }
    </header>
  )
}