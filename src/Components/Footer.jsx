import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import "../Components/Footerstyle.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                <p>BTM Layout,Bengaluru</p>
                <p>Karanataka.</p>
                </div>
            </div>
           <div className="phone">
             <h4>
           <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
           +91 8778187824
             </h4>
           </div>
           <div className="email">
             <h4>
           <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
           Yoganr3rajesh@gmail.com
             </h4>
           </div>
        </div>
        <div className="right">
            <h4>Follow me by...</h4>
        <div className="social">
            <a href="/"><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
           <a href="/"><FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
           <a href="https://www.linkedin.com/in/rajesh-kumar-a24934234"><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
           <a href="https://github.com/Rajeshyogan" rel="noreferrer"  target='_blank'><FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Footer