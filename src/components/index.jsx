import React from 'react';
import "./style.scss";
import cloud from "../../src/images/cloud.png";
import cloudSoft from "../../src/images/cloud-soft.png";


const Intro = () => {
  return (
    <div className="Intro_section">
        <div className="vector_bg" id='parallex'>

        </div>

        <img  src={cloud} className = "cloud-soft"  alt=''/>
        <img  src={cloudSoft} className = "cloud-soft"  alt=''/>
    <div className="contennt">
      
    </div>
    </div>
  )
}

export default Intro
