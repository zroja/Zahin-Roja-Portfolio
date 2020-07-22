import React, {Component} from 'react';
import Pdf from '../assets/Resume.pdf';


class Home extends Component{

    state = {};
    render(){
    return (
    <div className = "home-section" id = "home">
     <div class="centered">
        <h1 >Zahin Roja</h1> 
        <h3>Software Engineer/Data Scientist</h3>
        
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
        <div data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="zroja">
            <a class="btn" href='https://www.linkedin.com/in/zroja?trk=profile-badge'>LinkedIn</a>
        </div>
        <a class="btn" href="https://github.com/zroja" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" aria-label="Follow @zroja on GitHub">Github</a>    
        <script async defer src="https://buttons.github.io/buttons.js"></script>
    
        <a class="btn" href="mailto:zahinroja1@gmail.com">Email</a>

        <a class="btn" href = {Pdf} target = "_blank" rel="noopener noreferrer">Resume</a>
    </div>
       
    </div> 
    
    )}
}
export default Home;