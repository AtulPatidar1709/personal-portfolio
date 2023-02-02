import React from 'react';
import './style.scss';

const Section = ({children ,id, className, tittle, background}) => {
  return (
    <div id={id || ""} className={`section ${className ? className : ""} ${background === "dark" ? "dark" : "light" }`}>  
    <div className="conent">
        {tittle && (
            <div className="section-tittle">
            <h2>{tittle}</h2>
            </div>
        )}
        {children}
    </div>
    </div>
  )
}

export default Section;
