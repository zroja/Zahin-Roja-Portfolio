import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import pic1 from '../assets/pic1.PNG';
import pic2 from '../assets/pic2.JPG';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import pic6 from '../assets/pic6.png';
import pic7 from '../assets/pic7.JPG';
import pic8 from '../assets/pic8.jpg';
import pic9 from '../assets/pic9.png';
import pic10 from '../assets/pic10.jpg';
import pic11 from '../assets/pic11.png';
import pic12 from '../assets/pic12.JPG';
import pic13 from '../assets/pic13.png';
import pic14 from '../assets/pic14.jpg';
import pic15 from '../assets/pic15.png';
import pic16 from '../assets/pic16.png';
import pic17 from '../assets/pic17.png';
import pic18 from '../assets/pic18.JPG';
import pic19 from '../assets/pic19.png';
import pic20 from '../assets/pic20.png';
import pic21 from '../assets/pic21.png';
import pic22 from '../assets/pic22.png';
import pic23 from '../assets/pic23.JPG';
import pic24 from '../assets/pic24.JPG';
import pic25 from '../assets/pic25.JPG';
import pic26 from '../assets/pic26.png';
import pic27 from '../assets/pic27.jpg';
import pic28 from '../assets/pic28.jpg';
import pic29 from '../assets/pic29.jpg';
import pic30 from '../assets/pic30.JPG';

class Photoshoots extends Component{
    state= {};
    render(){
    return(
    <div className = "photoshoots-section" id = "photoshoots">
       <h1>Photoshoots</h1>
       <p>Click on screen and use your left and right arrow keys to see slideshow</p>

       <StyleRoot>
    <Coverflow
      displayQuantityOfSide={2}
      navigation
      infiniteScroll
      enableHeading
      media={{
        '@media (max-width: 900px)': {
          width: 'auto',
          height: 'auto'
        },
        '@media (min-width: 900px)': {
          width: 'auto',
          height: 'auto'
        }
      }}
    >
      <img src={pic1} alt=''/>
      <img src={pic2} alt=''/>
      <img src={pic3} alt=''/>
      <img src={pic4} alt=''/>
      <img src={pic5} alt=''/>
      <img src={pic6} alt=''/>
      <img src={pic7} alt=''/>
      <img src={pic8} alt=''/>
      <img src={pic9} alt=''/>
      <img src={pic10} alt=''/>
      <img src={pic11} alt=''/>
      <img src={pic12} alt=''/>
      <img src={pic13} alt=''/>
      <img src={pic14} alt=''/>
      <img src={pic15} alt=''/>
      <img src={pic16} alt=''/>
      <img src={pic17} alt=''/>
      <img src={pic18} alt=''/>
      <img src={pic19} alt=''/>
      <img src={pic20} alt=''/>
      <img src={pic21} alt=''/>
      <img src={pic22} alt=''/>
      <img src={pic23} alt=''/>
      <img src={pic24} alt=''/>
      <img src={pic25} alt=''/>
      <img src={pic26} alt=''/>
      <img src={pic27} alt=''/>
      <img src={pic28} alt=''/>
      <img src={pic29} alt=''/>
      <img src={pic30} alt=''/>
    </Coverflow>
  </StyleRoot>

    <p>Slide left and right on phone</p>
  </div> 
      
      )
      
      }
  }
  export default Photoshoots;