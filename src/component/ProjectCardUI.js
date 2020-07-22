import React from 'react';
import '../card-style.css';

const Card=props=>{
    return(
        <div className='card text-center'>
            <div className='overflow'>
                <img src={props.imgsrc} alt="Hope" className='card-img-top'/>
            </div>
           <div className="card-body.text-dark">
               <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.text}
                </p>
                <div class="button">
                <a role="button" href={props.link} className='btn btn-outline-info'>Learn more <span role="img" aria-label="smiley-face">😊</span></a>
                </div>
           </div>
         </div>
    );
}

export default Card;