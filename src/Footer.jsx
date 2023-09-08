import 'bootstrap/dist/css/bootstrap.min.css';
import footer from './img/footer.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './Footer.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
const Footer = ()=>{

    return(
<div className="background">
<div className="all">
         <div className ="left">
             <div className="p&i">
                <div className="phone"><LocalPhoneIcon/>CONTACT</div>
                    <img src={footer}/ >
                </div>
           <div className="text2">
                 <div className="phone1">
                      <LocalPhoneIcon/>
                        Contact
                       <br/>111-128-128
                          <div className="icon"><FacebookRoundedIcon/> <TwitterIcon/> <InstagramIcon/> <YouTubeIcon/></div>
                 </div>
                             <div className="location">
                               <LocationOnIcon />Location:
                                FAST-House<br/>
                                Rohtas Road, G-9/4<br/>
                                Islamabad-44000
                              </div>
            </div>
        </div>
    <div className="mid"> 
              <div className="link">
        <InsertLinkOutlinedIcon className="ll"/>USEFUL LINK
               </div>
               <div className="textip">
               <div className= "texti">
               <NavigateNextOutlinedIcon className="nicon"/>Program<br/>
               <NavigateNextOutlinedIcon className="nicon"/>PEEF<br/>
               <NavigateNextOutlinedIcon className="nicon"/>NU Mail<br/>
               <NavigateNextOutlinedIcon className="nicon"/>Careers<br/>
               <NavigateNextOutlinedIcon className="nicon"/>FAST Connect (For Alumni)<br/>
               <NavigateNextOutlinedIcon className="nicon"/>FAST Connect (For Faculty) <br/>
               <NavigateNextOutlinedIcon className="nicon"/>OSAF
               </div>
               <div className= "texti">
               <NavigateNextOutlinedIcon className="nicon"/>Degree Verification<br/>
               <NavigateNextOutlinedIcon className="nicon"/>SLATE-LMS<br/>
               <NavigateNextOutlinedIcon className="nicon"/>ORIC<br/>
               <NavigateNextOutlinedIcon className="nicon"/>QEC<br/>
               <NavigateNextOutlinedIcon className="nicon"/>Contect US<br/>
               <NavigateNextOutlinedIcon className="nicon"/>FAST-NU Library <br/>
               <NavigateNextOutlinedIcon className="nicon"/>CoE-CPEC
               </div>
               </div>
    </div>
    <div className="right">
    <div className="campus">
    <AccountBalanceOutlinedIcon/>CAMPUSES
    </div>
                <div className= "texti">
               <NavigateNextOutlinedIcon className="nicon"/>Chiniot-Faisalabad Campus<br/>
               <NavigateNextOutlinedIcon className="nicon"/>Islamabad Campus<br/>
               <NavigateNextOutlinedIcon className="nicon"/>Karachi Campus<br/>
               <NavigateNextOutlinedIcon className="nicon"/>Lahore Campus<br/>
               <NavigateNextOutlinedIcon className="nicon"/>Peshawar Campus
               </div>
    </div>
    
</div>
<div align="center" className="copy">Copyrights <CopyrightOutlinedIcon/> 2022, All Rights Reserved.</div>
</div>

        )

}
export default Footer;