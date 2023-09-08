import lahore from './video/lahore.mp4';
import karachi from './video/karachi.mp4';
import './Content.css'
const Content = ()=>{

    return(
        <div>
        <div className="Content">
        Founded as a Federally Chartered University in July 2000, the National University of Computer and Emerging Sciences is a premiere University of Pakistan, renowned for quality and impact of its students in the development of local software and other industries. The university has five modern campuses at Karachi, Lahore, Islamabad, Peshawar and Chiniot-Faisalabad. These campuses provide world class educational environment and recreational facilities to about over 11,000 students, around one quarter are female and over 500 skilled faculty members.

        Research wings of the university are well recognized, nationally and internationally. They are embarked upon cutting edge research having direct impact on the social, economic and technological needs of Pakistan. Our vision is to become a globally recognized research university of Pakistan within the next decade.

</div>
<div className="video">
<video src={lahore} width="530" height="300" controls="controls" autoplay="false" />
<video src={karachi} width="530" height="300" controls="controls" autoplay="false"  align="right"/>
</div>
</div>
        )

}
export default Content;