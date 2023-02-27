import React, { useRef, useEffect } from "react";
import SVG from "../../assets/svg-fg-1.svg";
import "./scrolling.css";

const ScrollingText = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    let currentPos = window.pageYOffset;

    const update = () => {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.55;

      section.style.transform = `skewX(${ speed }deg)`;

      currentPos = newPos;

      requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(update);
    };
  }, []);

  return (
    <div className="span__scroller" ref={sectionRef}>
      <img src={SVG} alt="fingers up" className="fingers" />
      <span>SCROLL TO ENJOY</span>
      <img src={SVG} alt="fingers up" className="fingers" />
      <span>SCROLL TO ENJOY</span>
      <img src={SVG} alt="fingers up" className="fingers" />
      <span>SCROLL TO ENJOY</span>
      <img src={SVG} alt="fingers up" className="fingers" />
      <span>SCROLL TO ENJOY</span>
      <img src={SVG} alt="fingers up" className="fingers" />
      <span>SCROLL TO ENJOY</span>
    </div>
  );
};

export default ScrollingText;
