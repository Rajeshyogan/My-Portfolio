import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg2 from '../Components/Heroimg2'
import Skills from '../Components/Skills'
import Footer from '../Components/Footer'
import Skillsforpage from '../Components/Skillsforpage'

const Skill = () => {
  return (
    <div>
    <Navbar/>
    <Heroimg2 heading="SKILLS." text="I Have a more confident with my skills"/>
    <Skillsforpage/>
    <Footer/>
    </div>
  )
}

export default Skill