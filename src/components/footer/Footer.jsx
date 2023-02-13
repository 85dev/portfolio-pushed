import React from "react";
import './footer.css';
import {AiFillLinkedin} from 'react-icons/ai'
import { FaGithub } from "react-icons/fa"
import { AiOutlineHome } from "react-icons/ai"
import { Player } from '@lottiefiles/react-lottie-player'
import { MdOutlineTopic } from 'react-icons/md'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { AiOutlineBook } from 'react-icons/ai'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { AiOutlineContacts } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div className="footer__top">
                <Player autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_u25cckyh.json"  style={{ height: '200px', width: '200px' }}>
                </Player>
            </div>
            
            <div className="permalinks">
                <a href="#">Home <AiOutlineHome /></a>
                <a href="#about"> About <MdOutlineTopic /></a>
                <a href="#">Experience < RiGitRepositoryLine /></a>
                <a href="#">Know-How < AiOutlineBook /></a>
                <a href="#">Portfolio < AiOutlineFolderOpen/> </a>
                <a href="#">Contact < AiOutlineContacts/></a>
            </div>

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