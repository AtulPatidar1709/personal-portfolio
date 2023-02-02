import React from "react";
import "./style.scss";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import CallToAction from '../shared/CallToAction'
import {AiOutlineCloudDownload}  from 'react-icons/ai';

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JS,React,HMTL,CSS,SCSS"
                    />
                </div>

                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                    </p>
                    <CallToAction text="Download CV" icon={<AiOutlineCloudDownload/>}/>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
