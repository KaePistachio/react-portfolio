import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SinglePost from "./SinglePost";
import Post from "./Post";
import Project from "./Project";
import NavBar from "./NavBar";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } exact />
        <Route path='/about' element={ <About /> } />
        <Route path='/post/:slug' element={ <SinglePost /> } />
        <Route path='/post' element={ <Post /> } />
        <Route path='/project' element={ <Project /> } exact />
      </Routes>
    </Router>
  );
}

export default App;
