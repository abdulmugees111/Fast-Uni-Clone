import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import Cdata from './Cdata'
import BigCard from './BigCard'
import './BigCard.css'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
const BigCardStructure = ()=>{
    return(
       
        <div className ="bcardp">
<div align="center">
        <h2>Offered Programs</h2>
<div className="icon">----<LocalActivityOutlinedIcon/>----</div>
<div className="cardbtn">
<button className="bttn1"><NavigateBeforeOutlinedIcon/></button>
<button className="bttn2"><NavigateNextOutlinedIcon/></button>
</div>

<div className="test">
     
      {
        Cdata.map((data, index) => {
          return <BigCard  
          id={Cdata[index].id}
          title={Cdata[index].title}
          info= {Cdata[index].info}    
          imgsrc={Cdata[index].imgsrc}
          />
        })
      }  
    </div>
    <div className="cardbtn">
<button className="bttn1"><NavigateBeforeOutlinedIcon/></button>
<button className="bttn2"><NavigateNextOutlinedIcon/></button>
</div>
    </div>
    
  </div>
        )
}
export default BigCardStructure;