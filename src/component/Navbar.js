import React, { Component } from "react";
import {Link} from "react-scroll";
import '../App.css';


class Navbar extends Component {
    
      componentDidMount(){
        window.addEventListener('scroll', () => {
          const isTop = window.scrollY > 100;
          const nav = document.getElementById('nav');
          if (isTop) {
            nav.classList.add('scrolled');
          }
         
          else {
            nav.classList.remove('scrolled');
          }
    
        })
      }
    
      componentWillUnmount(){
        window.removeEventListener('scroll');
      }

      
    
   // state = {};
    render(){

     
        return (
            
            <div id = "nav"  className= "nav">
                <Link 
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                >Home
                
                </Link> 

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                >About 
                
                </Link>

                <Link
                    activeClass="active"
                    to="experiences"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                >Experience
                
                </Link>

                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                >Projects
                
                </Link>

                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                >Skills
                
                </Link>

                <Link
                    activeClass="active"
                    to="photoshoots"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                >Photoshoots
                
                </Link>

                <Link
                    activeClass="active"
                    to="interests"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                >Interests
                
                </Link>
                 

                
            </div>


        )

    }
}
export default Navbar;