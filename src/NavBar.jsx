
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const NavBar = ()=>{
   
const [ displayInput, setDisplayInput ] = useState(false)
    return(
        <div>
        <div className="navbar">
        <div className="dd">
        <select className="op">
        <option value="Home" ><a href="https://www.nu.edu.pk">Home</a></option>
        </select>
       
        <select className="op">
        <option className="drop" selected value="Admission">Admission</option>
        <option className="drop" selected value="Offered Programs">Offered Programs</option>
        <option className="drop" selected value="Admission Suhedule">Admission Suhedule</option>
        <option className="drop" selected value="How To Apply">How To Apply</option>
        <option className="drop" selected value="Eligibility Criteria">Eligibility Criteria</option>
        <option className="drop" selected value="Loans/Scholarships">Loans/Scholarships</option>
        <option className="drop" selected value="Test Pattern">Test Pattern</option>
        <option className="drop" selected value="Fee Structure">Fee Structure</option>
      </select>


      <select className="op">
      <option className="drop" selected value="Campuses">Campuses</option>
      <option className="drop" selected value="Karachi">Karachi</option>
      <option className="drop" selected value="Lahore">Lahore</option>
      <option className="drop" selected value="Islamabad">Islamabad</option>
      <option className="drop" selected value="Peshawar">Peshawar</option>  
    </select>



    <select className="op"> 
        <option className="drop" selected value="Student">Student</option>
        <option className="drop" selected value="Degree Verifacation Program">Degree Verifacation Program</option>
        <option className="drop" selected value="Academic Calendar">Academic Calendar</option>
        <option className="drop" selected value="Code Of Conduct">Code Of Conduct</option>
        <option className="drop" selected value="Grading">Grading</option>
        <option className="drop" selected value="Student Chapters">Student Chapters</option>
        <option className="drop" selected value="Rules & Regulation">Rules & Regulation</option>
        <option className="drop" selected value="Equivalence By HEC">Equivalence By HEC</option>
        <option className="drop" selected value="Flex Student Module">Flex Student Module</option>
        <option className="drop" selected value="Phd Graduates">Phd Graduates</option>
        <option className="drop" selected value="Financial Rules">Financial Rules</option>      
        </select>




      <select className="op">
        <option className="drop" selected value="University">University</option>
        <option className="drop" selected value="History">History</option>
        <option className="drop" selected value="Foundation">Foundation</option>
        <option className="drop" selected value="Chancellor">Chancellor</option>
        <option className="drop" selected value="Vision & Misssion Statement">Vision & Misssion Statement</option>
        <option className="drop" selected value="Board Of Trustees">Board Of Trustees</option>
        <option className="drop" selected value="Board Of Governors">Board Of Governors</option>
        <option className="drop" selected value="Officers Of The University">Officers Of The University</option>
      </select>




      <select className="op">
        <option className="drop" selected value="Services">Services</option>
        <option className="drop" selected value="Fast-NU Library">Fast-NU Library</option>
        <option className="drop" selected value="Alumni">Alumni</option>
        <option className="drop" selected value="Job Portal">Job Portal</option>
        <option className="drop" selected value="NU Mail">NU Mail</option>
        <option className="drop" selected value="SLATE-LMS">SLATE-LMS</option>
        <option className="drop" selected value="Career Services Officer">Career Services Officer</option>
        <option className="drop" selected value="Public Information Officer">Public Information Officer</option>
      </select>




      <select className="op">
        <option value="">ORIC</option>
        <option className="drop" selected value="Home">Home</option>
        <option className="drop" selected value="Research">Research</option>
        <option className="drop" selected value="Capacity Building">Capacity Building</option>
        <option className="drop" selected value="Innovation & Commercialization">Innovation & Commercialization</option>
        <option className="drop" selected value="Policies">Policies</option>
        <option className="drop" selected value="Announcements">Announcements</option>
        <option className="drop" selected value="Scholarships">Scholarships</option>
      </select>




      <select className="op">
        <option className="drop" selected value="QEC">Admission</option>
        <option className="drop" selected value="Home">Offered Programs</option>
        <option className="drop" selected value="Team">Admission Suhedule</option>
        <option className="drop" selected value="Accredition">How To Apply</option>
        <option className="drop" selected value="Self Assessment">Eligibility Criteria</option>
        <option className="drop" selected value="Capacity Building">Loans/Scholarships</option>
        <option className="drop" selected value="Publications">Test Pattern</option>
        <option className="drop" selected value="Photo Gallery">Fee Structure</option>
      </select>

      <select className="op">
      <option value="Contact Us">Contact Us</option>
      </select>
      <select className="op">
      <option value="Career">Career</option>
      </select>
      <button onClick={() => setDisplayInput(!displayInput)}  className="op"><SearchIcon/></button>
      {displayInput && <input value="mugees"/>}
      </div>
      
</div>


</div>

        )

}
export default NavBar;