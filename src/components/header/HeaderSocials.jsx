import React from "react";
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { FiDribbble } from "react-icons/fi"

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/nicolas-mercier-18b6a214a/" rel="noopener noreferrer" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/85dev" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
            <a href="https://dribbble.com" rel="noopener noreferrer" target="_blank"><FiDribbble /></a>
        </div>
    )
}

export default HeaderSocials