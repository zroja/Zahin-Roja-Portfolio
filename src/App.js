import React, {Component} from "react";
import './App.css';

import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Interests from './pages/Interests';
import GoTop from './component/GoTop';
import Footer from "./component/Footer";
import Experiences from "./pages/Experiences";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Photoshoots from "./pages/Photoshoots";



class App extends Component{


  render(){
    return (

      <div className= "App">
        <Navbar />
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Photoshoots />
        <Interests />
        <GoTop />
        <Footer />
      </div>
      );
  }
}
export default App;
