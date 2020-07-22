import React, {Component} from 'react';
import Pic from '../assets/BioPic.png';


class About extends Component{
    state= {};
    render(){
    return(
    <div className = "about-section " id = "about">
            <h1 >About Me</h1>
            
				<img className="bio-img-circle" src= {Pic} alt="pic" style={{ width: 200, marginRight: 10, marginBottom: 12, marginTop: 12}}/>
				<br></br>
                <p>Hi my name is Zahin Roja and I am a technology enthusiast with interests in data science and cloud.</p>
                <p>Currently working as a software engineer at Bank of America in Jersey City, New Jersey. </p>
                <p>Some of my hobbies include traveling, exercising, photoshoots, foodie, and writing articles</p>

    </div>
      
    )
    
    }


}

export default About;



