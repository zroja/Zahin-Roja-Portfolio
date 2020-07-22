import React , {Component} from 'react';
import Card from './ProjectCardUI';
import Hope from '../assets/Hopeapp.png';
import TravelInsights from '../assets/travelscape.png';
import Invealth from '../assets/Invealth.png';


class ProjectsCard extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    
                    <div className="col-sm-4">
                        <Card  class= 'card-image-top' imgsrc={Hope} title='Mental Health App' text='Empowering females to speak about mental health: chat, a professional, statistics' link='https://devpost.com/software/hope-n1m6gq'/>
                    </div>
                
                    <div className="col-sm-4">
                        <Card class= 'card-image-top' imgsrc={TravelInsights} title='Event Attendees Feature' text='Adding a feature on trip advisor that gives people the ability to spend better and smarter.' link='https://devpost.com/software/travel-insights' />
                    </div>

                    <div className="col-sm-4">
                        <Card class= 'card-image-top' imgsrc={Invealth} title='Financial Literacy App/Site' text='Educating users to make better financial choices on how to save their money' link='https://devpost.com/software/invealth' />
                    </div>

                </div>
            </div>
        );
    }
}

export default ProjectsCard;