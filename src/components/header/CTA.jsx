import React, { useState } from "react";
import CV from "../../assets/CV.pdf"
import { AiOutlineLike } from "react-icons/ai"
import { AiOutlineReload } from "react-icons/ai"

const CTA = () => {
    const [counter, setCounter] = useState(357);

    const likeCounter = () => {
        setCounter(counter + 1);
    }

    return(
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
            <a onClick={likeCounter} className="btn btn-secondary">
                {counter} 
                <AiOutlineLike className="btn-secondary-image" /> 
            </a>
        </div>
    )
}

export default CTA;
