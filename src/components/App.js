import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SinglePost from "./SinglePost";
import Project from "./Project";
import NavBar from "./NavBar";
import ContactMe from "./ContactMe";
import DarkModeContext from "../context/isDarkContext";

function App() { 
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')));
  const darkValue = { isDark, setIsDark };

  return (
    <DarkModeContext.Provider value={darkValue} >
    <div className={isDark ? "dark-mode" : ""}>
    <Router>
      <NavBar isDark={isDark} />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/post/:slug' element={ <SinglePost /> } />
        <Route path='/project' element={ <Project /> } />
        <Route path='/contact' element={ <ContactMe /> } />
      </Routes>
    </Router>
    </div>
    </DarkModeContext.Provider>
  );
}

export default App;
