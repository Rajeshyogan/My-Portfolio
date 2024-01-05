import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import Aboutcontent from '../Components/Aboutcontent'

function About() {
  return (
    <div>
    <Navbar/>
    <Heroimg2 heading="ABOUT." text="I'm a Friendly Front-End Developer."/>
    <Aboutcontent/>
    <Footer/>
    </div>
  )
}

export default About