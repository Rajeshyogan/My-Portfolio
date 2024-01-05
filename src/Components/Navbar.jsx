import { Link } from "react-router-dom"
import "../Components/Navbar.css"
import {FaBars,FaTimes} from "react-icons/fa"

import React, { useState } from 'react'

function Navbar() {

let [click,setclick]=useState(false)
let updatesetclick=()=>{
    setclick(!click)
}

let [headcolor,setheadcolor]=useState(false)
let updatesetheadcolor=()=>{
    if(window.scrollY>=100){
  setheadcolor(true)
    }
    else{
        setheadcolor(false)
    }
}
window.addEventListener("scroll",updatesetheadcolor)
  return (
    <div className={headcolor?("header header-bg"):("header")}>
    <Link to="/">
        <h1>RK <span style={{color:"yellow"}}>Dev.</span></h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"} >
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Project">Project</Link>
            </li>
            <li>
                <Link to="/skill">Skills</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
       <div className="hamburger" onClick={updatesetclick}>
        {click ? (<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
       </div>
    </div>
  )
}

export default Navbar