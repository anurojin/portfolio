import  "./Section.css";
import emailjs from 'emailjs-com';
import Slide from "./slide";

import { useEffect, useState } from "react";



const Section = () => {
const [status,setStatus]=useState('');

 const sendEmail = (e) => {
   
  e.preventDefault();

    emailjs.sendForm('service_7yyj5fn', 'template_0917e56', e.target, 'user_UB9CFnPC4lEK0TR4iBXVM')
      .then((result) => {
   console.log(result.text);
  setStatus('SUCCESS');

  }, (error) => {
    console.log(error.text);
  alert("mail not send.. please try again");
 
 });
  e.target.reset()
 
 

 }  
 useEffect(()=>{
if(status===('SUCCESS'))
{
    setTimeout(()=>{
setStatus('');
    },3000);
}
 },[status]);
 const renderAlert=()=>(
<div>
    <p>thank you for contacting..will get back soon</p>
</div>
)     
    return (
        <>
        <div id="section1">
          <div id="content">
        <h1 >HI , I am Anu Mariam Skariah <br></br>
        
      
        
        </h1>
        </div>
            <Slide/>
       
             </div>
   

      <div id="section2">
<div className="container">
        <form id="contact-form" onSubmit={sendEmail} method="POST">
    <h1 id="hello"> SAY HELLO</h1>
    <div className="row">
      <div className="col-25">
        <label >NAME</label>
        </div>
        <div className="col-75">
        <input type="text" name="name" className="form-control" required /></div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >EMAIL </label>
        </div>
         <div className="col-75">
        <input type="email" name="useremail" className="form-control" aria-describedby="emailHelp" />
    
    </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >MESSAGE</label>
        </div>
        <div className="col-75">
        <textarea name="message" required className="text" placeholder="your message here"></textarea>
    
    </div>
    </div>
    <div class="row">
    <button type="submit" className="btn btn-primary">SEND</button>
    {status==='SUCCESS' && renderAlert()}
    </div>
</form>
</div>
      </div>


      {/* <div id="section3">
        <h1>please click here to download the resume 
          <button type="button" onClick={Resume}>DOWNLOAD</button> 

         </h1> 
           

      </div> */}
</>
      
      );
      
 
}
 
export default Section;


 
