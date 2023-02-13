import React from "react";
import './footer.css';
import {AiFillLinkedin} from 'react-icons/ai'
import { FaGithub } from "react-icons/fa"
import { Player } from '@lottiefiles/react-lottie-player';

const Footer = () => {
    return (
        <footer>
            <div className="footer__top">
                <Player autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_u25cckyh.json"  style={{ height: '200px', width: '200px' }}>
                </Player>
            </div>
            
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Know-How</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/nicolas-mercier-18b6a214a/"><AiFillLinkedin /></a>
                <a href="https://github.com/85dev"><FaGithub/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Nicolas Mercier 2023, all rights reserved. </small>
            </div>
        </footer>
    )
}

export default Footer