import React from 'react';
import Card from '../component/ProjectsCard.js'




function Projects(props){


    return(
      <div className='projects-section' id = 'projects' >
           <h1 className='project-heading' >Projects</h1>
          <Card />
  
          
      </div>
    );
    
}

export default Projects;