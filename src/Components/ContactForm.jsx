import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



export const ContactUs = () => {
  const form = useRef();

  const Notify = () => {
    toast.success("Message Sended Sucessfully", {
      position: toast.POSITION.TOP_CENTER
    })
  } 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fcjdr8l', 'template_ut4f33q', form.current, 'tvRgCBRW0gpxHs1Yq')
      .then((result) => {
          // console.log(result.text);
          form.current.reset();
          Notify()
      }, (error) => {
          // console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" className='btn' value="Send" />
      <ToastContainer theme="colored"/>
    </form>
  );
};