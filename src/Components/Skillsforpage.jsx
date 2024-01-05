import React from 'react'
import "./Skills.css"
import skillImage from "../assets/Skillphoto2.png"
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

function Skillsforpage() {
  return (
    <div className='skill-section'>
      <div className="left-skill">
        <div className='skills-list'>
            <ul>
                <li>
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>React Js</h3>
                    </div>
                    <div className='skill-style-main'>
                         <div className='skill-style-inside' ></div>
                    </div>
                </li>
                <li>
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>JavaScript</h3>
                    </div>
                    <div className='skill-style-main'>
                         <div className='skill-style-inside' style={{width:"90%"}}></div>
                    </div>
                </li>
                <li>
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>MongoDB</h3>
                    </div>
                    <div className='skill-style-main'>
                         <div className='skill-style-inside' style={{width:"80%"}}></div>
                    </div>
                </li>
                <li>
                    
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>Tailwind CSS</h3>
                    </div>
                    <div className='skill-style-main'>
                         <div className='skill-style-inside' style={{width:"80%"}}></div>
                    </div>
                </li>
                <li>
                    
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>CSS3</h3>
                    </div>
                    <div className='skill-style-main'>
                         <div className='skill-style-inside'></div>
                    </div>
                </li>
                <li>
                    
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>HTML5</h3>
                    </div>
                    <div className='skill-style-main'>
                         <div className='skill-style-inside'></div>
                    </div>
                </li>
                <li>
                    
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>Node JS</h3>
                    </div>
                    <div className='skill-style-main'>
                         <div className='skill-style-inside' style={{width:"75%"}}></div>
                    </div>
                </li>
                <li>
                   
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>Git</h3>
                    </div>
                    <div className='skill-style-main'>
                         <div className='skill-style-inside' style={{width:"88%"}}></div>
                    </div>
                </li>
                <li>
                   
                    <div className='skills-list-details'>
                    <LaptopMacIcon className='icon'/>
                    <h3>Bootstrap</h3>
                    </div>
                    <div className='skill-style-main'>
                         <div className='skill-style-inside' style={{width:"85%"}}></div>
                    </div>
                </li>
            </ul>
        </div>

      </div>
      <div className="right-skill">
        <img src={skillImage} alt="" />
      </div>
    </div>
  )
}

export default Skillsforpage