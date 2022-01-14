import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SinglePost from "./SinglePost";
import Post from "./Post";
import Project from "./Project";
import NavBar from "./NavBar";
import ContactMe from "./ContactMe";

const DarkModeContext = createContext();

function DarkModeProvider({children}) {
  const [ isDark, setIsDark ] = useState(false);
  
  <DarkModeContext.Provider value={{ isDark, setIsDark }}>
  </DarkModeContext.Provider >
}

function App() { 
  return (
    //<DarkModeProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } exact />
        <Route path='/about' element={ <About /> } />
        <Route path='/post/:slug' element={ <SinglePost /> } />
        <Route path='/post' element={ <Post /> } />
        <Route path='/project' element={ <Project /> } exact />
        <Route path='/contact' element={ <ContactMe /> } exact />
      </Routes>
    </Router>
    //</DarkModeProvider>
  );
}

export default App;
