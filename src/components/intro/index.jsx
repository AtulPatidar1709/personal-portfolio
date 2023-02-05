import React from 'react';
import "./style.scss";
import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";
import Navigation from './navigation-bar';
import IntroConntent from "./intro-content"


const Intro = () => {
  return (
    <div className="Intro_section">
        <div className="vector_bg" id='parallex'>
        </div>
        <img  src={cloud} className = "cloud"  alt=''/>
        <img  src={cloudSoft} className = "cloud-soft"  alt=''/>
    <div className="contennt">
      <Navigation/>
      <IntroConntent />
    </div>
    </div>
  )
}

export default Intro
