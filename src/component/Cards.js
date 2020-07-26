import React , {Component} from 'react';
import Card from './CardUI';
import BofA from '../assets/BofA.png';
import viacomCBS from '../assets/viacomCBS.jpg';
import MountSinai from '../assets/MountSinai.jpeg';
import NBCU from '../assets/NBCUniversal.png';


class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    
                    <div className="col-md-4">
                        <Card class= 'card-image-top' imgsrc={BofA} title='Global Technology Analyst' text='July 2020 - Present'/>
                    </div>
                
                    <div className="col-md-4">
                        <Card imgsrc={viacomCBS} title='Data Science Intern' text='January 2020 - March 2020'/>
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={BofA} title='Global Technology Analyst Intern' text='June 2019 - August 2019 ' />
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={NBCU} title='Mediatech Intern' text='January 2019 - March 2019'/>
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={MountSinai} title='Data Analyst Intern' text='May 2018 - August 2018'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;