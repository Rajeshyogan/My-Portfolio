import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import ProjectExample from '../Components/ProjectExample'


function Project() {
  return (
    <div>
    <Navbar/>
    <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
    <ProjectExample/>
    <Footer/>
    </div>
  )
}

export default Project