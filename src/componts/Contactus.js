 import React, { useRef,useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
// import "../componets/contacts.css"
// import  from "../assets/new3.jpeg";
import new3 from "../assets/new3.jpeg";
import "../componts/contacts.css";



 const Pop = () => {
  const form = useRef();
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  let [message, setMessage] = useState('');


  const sendData = async (e) => {
    e.preventDefault();
  
    let data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
  
    console.log(data);
  
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
  
      const response = await fetch('https://mern-back-topaz.vercel.app/sendData/', requestOptions);
      const result = await response.json(); // await the JSON response
  
      console.log(result); // log the result from API
      alert('Data Saved');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error(error);
      alert('Error saving data');
    }
  };
  

  

  return (
    <>

    <img className='new3' src={new3} alt="" />
    {/* {({ isVisible }) => */}
{/* <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
    {/* } */}
    <div className='email' >
      <h2>GET IN TOUCH</h2>
    <div className='form'>
    <form onSubmit={sendData} >
      <label>Name</label>
      <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Email</label>
      <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Phone</label>
      <input type="phone" name="user_phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /> 
      <label>Message</label>
      <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
      <input type="SUBMIT" value="Send" />
    </form>
</div>
{/*     
        <div>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.383121693112!2d74.37488062286504!3d18.82562534639358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc32d63bd02875b%3A0x954d54a3aca266b7!2sVarad%20Diagnostic%20centre!5e0!3m2!1sen!2sin!4v1672225234406!5m2!1sen!2sin" width="1500" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
</div>
{/* 
<div>
  
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.383121693112!2d74.37488062286504!3d18.82562534639358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc32d63bd02875b%3A0x954d54a3aca266b7!2sVarad%20Diagnostic%20centre!5e0!3m2!1sen!2sin!4v1672225234406!5m2!1sen!2sin" width="1500" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div> */}

</>
  );
};

export default Pop;