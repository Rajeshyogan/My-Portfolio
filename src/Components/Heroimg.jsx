import "./Heroimg.css"
import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import Typed from "typed.js"
import homepageimg from "../assets/homepg.jpg"

function Heroimg() {

  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ['Front-End Developer', 'Web Developer', 'React Developer'],
      typeSpeed: 60,
      backSpeed: 90,
      loop: true,
    });

    return () => {
      typed.destroy(); // Destroy the Typed instance to avoid memory leaks
    };
  }, []);


  return (
    <div className="hero">
        <div className="content">
          <div className="main-heading">
          <p>Hi, I'm <span  className="media-style">Rajesh Kumar</span></p>
          </div>
            <div className="text-style">
              <span ref={typedTextRef}></span>
            </div>
            <div className="description">
            <p>Dedicated Front-End Web Developer with a solid foundation in HTML, CSS, and JavaScript. Experienced in creating responsive and user-friendly web interfaces. </p>
            </div>
            <div>
                <Link to="https://drive.google.com/file/d/1MDpxB07qHW5cJTahmg-OMMKfR29NWgsL/view?usp=sharing" className="btn">Resume</Link>
                <Link to="/Project" className="btn btn-light">Projects</Link>
            </div>
        </div>
        <div className="right-side">
          <img src={homepageimg} alt="" />
        </div>
    </div>
  )
}

export default Heroimg