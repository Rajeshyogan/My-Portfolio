import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"

export const ContactForm = () => {
  const form = useRef();
  let [confrom,setconfrom]=useState(false)
  let [getinput,setgetinput]=useState({un:"",em:"",mes:""})

  let updateinput=({target:{value,name}})=>{
    setgetinput({...getinput,[name]:value})
    
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dur2r4q', 'template_r3u19ip', form.current, 'oqvAc5obk3rKsrgP2')
      .then((result) => {
          console.log(result.text);
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  let upadtesetconfrom=()=>{
    setgetinput({un:"",em:"",mes:""})
    
    setconfrom(!confrom)

    setTimeout(()=>{
        setconfrom(false)
    },2000)
  }
 
  return (
    <div>
        <form  ref={form} onSubmit={sendEmail}>
            <label>Your Name :</label>
            <input type="text" onChange={updateinput} value={getinput.un} name="un" />
            <label>Your Email :</label>
            <input type="email" onChange={updateinput} value={getinput.em} name="em"  />
          
            <textarea onChange={updateinput} value={getinput.mes} placeholder="Type Your Text Here" name='mes'></textarea>
            <input type="submit" value="Send" className='btn' onClick={upadtesetconfrom}/>
        </form>
        <h1 style={{color:"yellow"}}>{confrom ? "Email sent Successfully":""}</h1>
    </div>
  )
}

export default ContactForm



