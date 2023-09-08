import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import './Card.css'
import num3 from './img/num3.jpg'
import Sdata from './Sdata'
import Card from './Card'
import './Card.css';
const CardStructure = ()=>{
    return(
       
        <div style={{ backgroundImage: `url(${num3})` }} className ="cardp">
<div align="center">
        <div>News & Events</div>
<div>----<ArticleOutlinedIcon/>----</div>
<div>
     
      {
        Sdata.map((data, index) => {
          return <Card  
            news={Sdata.news} 
            info= {Sdata[index].info}
            title={Sdata[index].title}
            link={Sdata[index].link}
            id={Sdata[index].id}
          />
        })
      }  
    </div>
    </div>
    <div className="btn">
    <button className="btn1">More News</button>
    <button className="btn2">More Events</button>
    </div>
  </div>
        )
}
export default CardStructure;