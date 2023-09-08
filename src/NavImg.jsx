
import './img.css'
import fast from './img/fast.jpg'
import fast1 from './img/fast1.jpg'
const NavImg = ()=>{

    return(
        <div className="navimg">
        <img src={fast} className="img1" />
        <img src={fast1} className="img2"/>

</div>
        )

}
export default NavImg;