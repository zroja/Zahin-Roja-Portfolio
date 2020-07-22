import React from 'react';
import '../card-style.css';

const Card=props=>{
    return(
        <div className='card text-center'>
            <div className='overflow'>
                <div class= 'container-fluid'>
                <img src={props.imgsrc} alt="Hope Project" className='card-img-top img-fluid'/>
                </div>
            </div>
           <div className="card-body.text-dark">
               <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.text}
                </p>
           </div>
         </div>
    );
}

export default Card;