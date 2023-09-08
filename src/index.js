import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavImg from './NavImg';
import NavBar from './NavBar';
//import MediaControlCard from './Test'
import ImgList from './ImgLIst'
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import './index.css';
import Content from './Content';
import CardStructure from './CardStructure';
import BigCardStructure from './BigCardStructure';
//import Card from './Card';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div>
  <NavImg/>
  <NavBar/></div>
      
   <ImgList/>
   <h2 align="center">Why Fast?</h2>
   <div className="camra">---<LinkedCameraIcon/>---</div>
   <Content/>
   <CardStructure/>
   <BigCardStructure/>
   <Footer/>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

