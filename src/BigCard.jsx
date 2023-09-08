import React from "react";


function BigCard(props){ 

console.log('id', props.id)
    return(
    <div className= "bcards">
    <div class="container"> <div className="hover"></div><div class="overlay">
   
    </div></div>
    <div className= "bcard"> 
    <div><h3 className ="bcard-title ">{props.title}</h3></div>
    <div className="data">
    <div className="bcard-nfo">
    
    <span className="bcard-category"> {props.info}</span>
   </div>
   <div className="im">
    <img className="card-img" src={props.imgsrc} alt="imgsrc"/> 
    </div> 
    </div> 

    
    <button className="bcardButton"> More Detail</button>
 
    </div>
    </div>   
  ) 
  }
 export default BigCard;