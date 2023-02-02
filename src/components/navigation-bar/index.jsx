import React from 'react'
import logo from '../../images/logo.png';
import '../navigation-bar/style.scss';
import "../../components/shared/CallToAction"
import CallToAction from '../../components/shared/CallToAction';

const Navigation = () => {
  return (
    <div  className='top-navigation-bar'>
      <div className="app-logo">
        <img src= {logo} alt="JS Dev" />
      </div>
      <div className="navigation">
        <span className="navigation-item">Skills</span>
        <span className="navigation-item">Portfolio</span>
        <span className="navigation-item">Blogs & Artilcles</span>
       <CallToAction text="Contact Me" />
      </div>
    </div>
  )
}

export default Navigation;