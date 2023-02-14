import React, { useEffect } from 'react';
import './header.css'
import CTA from './CTA'
import HeaderSocials from "./HeaderSocials"
import { Player } from '@lottiefiles/react-lottie-player';

const Header = () => {
    // useEffect(() => {
    //     const parallaxDomElement = document.querySelector('#parallax__1');
    //       document.addEventListener("mousemove", function (e) {
    //         let x = e.clientX;
    //         let y = e.clientY;

    //         parallaxDomElement.style.transform = `translate(${x}px, ${y}px})`;
    //         parallaxDomElement.style.backgroundPositionX = y * 100 + "%";
    //       })
    // }, []);

    return (
        <header>
            <div className="container header__container">
                <Player autoplay loop src="https://assets4.lottiefiles.com/packages/lf20_tqeabr9n.json" style={{ height: '200px', width: '200px' }}>
                </Player>
                <h1 id="parallax__1">I am Nicolas Mercier, a junior </h1>
                <h4>Fullstack Developer</h4>
                <CTA />
                <HeaderSocials />
            <div/>

                <a href="#contact" className="scroll__down">Scroll Down</a>

            </div>
        </header>
    )
}

export default Header