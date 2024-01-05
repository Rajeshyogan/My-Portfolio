import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import  { ContactUs } from '../Components/ContactForm'

function Contact() {
  return (
    <div>
    <Navbar/>
    <Heroimg2 heading="CONTACT." text="Lets have a chat"/>
    <ContactUs/>
    <Footer/>
    </div>
  )
}

export default Contact