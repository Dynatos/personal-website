import React, { Component } from 'react';
//import NavBar from '../NavBar/NavBar'; //TODO: remove
import './style.css'; //TODO: remove
// import ToriiNavBar from "./ToriiNavBar";
import About from './About';
import Schedule from "./Schedule";
import Prices from "./Prices";
import Contact from "./Contact";
import GoogleSlideshow from "./GoogleSlideshow";
import { aboutData, scheduleData, priceData, contactData } from './CameronData';

export default class CameronWrapper extends Component {
  
  render() {
    
    return (
      <div>
        {/*<ToriiNavBar />*/}
        <About aboutData={aboutData}/>
        <GoogleSlideshow />
        <Schedule scheduleData={scheduleData}/>
        <Prices priceData={priceData}/>
        <Contact contactData={contactData}/>
      </div>
    );
    
  }
}
