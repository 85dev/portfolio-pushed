import React from "react";
import Header from './components/header/Header';
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";

const App = () => {
    return (
        <>
            <Gallery />
            <Header/>
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