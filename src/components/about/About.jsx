import React from "react";
import './about.css';
import ME from '../../assets/me-5.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GiComputing} from 'react-icons/gi'

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div>
                        <img src={ME} alt="About Image" className="about__me"/>
                    </div>
                </div>

                <div className="about__me__responsive">
                        <img src={ME} alt="About Image" className="about__me__responsive__image"/>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1+ Year Working</small>
                        </article>

                        <article className="about__card">
                            <GiComputing className="about__icon"/>
                            <h5>Technologies</h5>
                            <small>Web languages</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>6 Completed</small>
                        </article> 

                    </div>

                    <p> 
                        After obtaining my Master's degree in Marketing & Communication, 
                        I decided to add a string to my bow and discovered web development 
                        during my studies. I then obtained a Bachelor in Web Development at 
                        Le Wagon school. With solid professional experience in web development, 
                        UX/UI design & animation, I am sensitive to design, the excitement 
                        of new technologies and code efficiency. </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About