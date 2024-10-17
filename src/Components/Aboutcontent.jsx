import { Link } from "react-router-dom"
import "./Aboutcontent.css"
import React from 'react'
import about2 from "../assets/aboutpagetop.avif"
import about1 from "../assets/bgtop2.avif"
import profileph from "../assets/photo1.jpg"

function Aboutcontent() {
  return (
    <div>
      <div className="about">

        <div className="left testing">
          <h1>Get to know me!</h1>
          <p>A Passionate FrontEnd Web Developer & I am Actively seeking a job in the Field of Web & Software Development</p>
          <p>Iam always excited to learn new things and develop my skills ,especially in the field of new technologies.</p>

          <Link to="/Contact">
            <button className="btn">Contact</button>
          </Link>
        </div>

        <div className="myphoto">
          <img src={profileph} alt="" />
        </div>

      </div>
      <div className="education">
        <div className="right">
          <div className="image-container">
            <div className="image-stack top">
              <img src={about1} alt="true" className="image" />
            </div>
            <div className="image-stack bottom">
              <img src={about2} alt="true" className="image" />
            </div>
          </div>
        </div>
        <div className="edu-list">
          <h1>EDUCATION</h1>
          <div className="edu-list-contain">
            <div className="edu-container">
              <h3>Master of Business Application</h3>
              <ul>
                <li>AnnaMalai University</li>
                <li>Year : 2021 - 2023</li>
              </ul>
            </div>
            <div className="edu-container">
              <h3> Bachelor of Computer Application</h3>
              <ul>
                <li>AnnaMalai University</li>
                <li>Year : 2018 - 2021</li>
              </ul>
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}

export default Aboutcontent