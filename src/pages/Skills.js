import React, {Component} from 'react';

class Skills extends Component{
    state= {};
    render(){
    return(
    <div className = "skills-section" id = "skills">
        <h1>Skills</h1>
            
            <h3 class= 'skills-header'>Programming Skills</h3>
            
                <h6>Backend: Python, C++, Java, SQL, C#</h6>
                <h6>Frontend: HTML,CSS,Javascript, React</h6>
                <br></br>
            <h3 class= 'skills-header'>Databases</h3>
            
                <h6>MySQL</h6>
                <h6>OracleSQL</h6>
                <h6>AWS DynamoDB</h6>
                <br></br>
            <h3 class= 'skills-header'>Tools</h3>
            
                <h6>TIBCO Composite</h6>
                <h6>Trifacta</h6>
                <h6>Docker</h6>
                <br></br>
            <h3 class= 'skills-header'>Platforms</h3>
            
                <h6>AWS</h6>
                <h6>Azure</h6>
                <h6>Firebase</h6>
    </div> 
      
    )
    
    }


}

export default Skills;