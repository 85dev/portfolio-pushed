import React from "react";
import './portfolio.css';
import IMG1 from '../../assets/origami_cover2.jpg'
import IMG2 from '../../assets/proquinter_cover.png'
import IMG3 from '../../assets/pilot-in-com.jpg'

// DON'T USE THE iMAGES IN PRODUCTION

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Origami App - Application mobile & Landing Page : Ruby On Rails, NestJS, Typescript, Firebase, Flutter & Dart",
        github: 'https://github.com/85dev/landingOrigami',
        demo: 'https://nameless-fortress-01398.herokuapp.com/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Proquinter - Application web avec back-office et login administrateur : Ruby On Rails, SQL, Html, Css & Vanilla JS',
        github: 'https://github.com/85dev/proquinter_web_app',
        demo: 'https://proquinter.com'
    },
    {
        id: 3,
        image: IMG3,
        title: "Pilot'in - Intégration landing page desktop Only : Vanilla JS, Html & CSS",
        github: 'https://github.com/85dev',
        demo: 'https://integration-test-dev.000webhostapp.com/'
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My recent work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                {
                    data.map(({id, image, title, github, demo}) => {
                        return(
                            <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                        </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio