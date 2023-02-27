import React from "react";
import Header from './components/header/Header';
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import ScrollingText from "./components/scrollingText/ScrollingText";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <ScrollingText />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
        </ >
    )
}

export default App