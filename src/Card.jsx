import React from "react";
import './index.css'; 
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
function Card(props){ 

console.log('id', props.id)
    return(
    <div className= "cards">
    <div className= "card">
    <div className="row">
    { //Check if message failed
      props.id === '1'
        ? <div className="newsp"> <NewspaperIcon   className="news"/></div> 
        : <div className="calp"> <CalendarMonthOutlinedIcon  className="cal"/> </div> 
    }
  </div>
    <div className="card-nfo">
    <span className="card-category"> {props.info}</span>
    <h3 className ="card-title ">{props.title}</h3>
    </div>

   
    </div>
    </div>   
  ) 
  }
 export default Card;