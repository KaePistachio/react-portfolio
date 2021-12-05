import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="nav-main">
      <div className="nav-container">
        <nav className="nav">
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
        <div className="nav-social">
          <SocialIcon 
            url="https://www.linkedin.com/in/nickwhitedev/" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" style={{ height: 35, width: 35 }}
          />
          <SocialIcon 
            url="https://github.com/KaePistachio" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" style={{ height: 35, width: 35 }}
          />
          <SocialIcon 
            url="https://twitter.com/FgcPistachio" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" style={{ height: 35, width: 35 }}          
          />
        </div>
      </div>
    </header>
  )
}