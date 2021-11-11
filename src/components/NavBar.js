import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-green-700">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink 
            to='/' 
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-indigo-100 text-4xl font-bold cursive tracking-widest"
          >
            KayPee
          </NavLink>
          <NavLink 
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-indigo-300 font cursive"
          >
            Blog Posts
          </NavLink>
          <NavLink 
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-indigo-300 font cursive"
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-indigo-300 font cursive"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
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