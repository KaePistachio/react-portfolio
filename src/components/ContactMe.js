import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import image from "./palace-bowl.jpeg";

const ContactMe = () => {
  const serviceId = "nwdevpassthrough";
  const templateId = "template_ac7lagu";
  const userId = "user_j4c0V4ZrBMna5X9uxYFo5";
  const navigate = useNavigate();
  const [ isSubmitting, setIsSubmitting ] = useState("Submit >>>")

  const sendEmail = (e) => {
    const myInterval = setInterval(setSubmit, 500);
      function setSubmit() {
        setIsSubmitting("Sending Email.");
        setTimeout(() => setIsSubmitting("Sending Email.."), 100);
        setTimeout(() => setIsSubmitting("Sending Email..."), 200); }
    console.log("sending email")
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {                 
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
    
    if(emailjs.sendForm) {
      setTimeout(() => clearInterval(myInterval), 1000);
      setTimeout(() => setIsSubmitting("Redirecting..."), 1500);
      setTimeout(() => navigate("/"), 2000);
    };
  };

  return (
    <main className="main-format">
      <img 
        className="bg-img"
        src={image}
        alt="crystal Palace Bowl"
      />
      <div className="bg-layer summer"></div>
      <div className="content-shell">
      <section className="contact-me mono">
        <div>
          <h1 className="contact-header mono-title">
            Contact Me
          </h1> 
          <p className="contact-desc mono">
            {`Please fill out the contact form with any requests or needs and I will get back to you ASAP. Thanks! <3`}
          </p>
        </div>
        <form
          className="contact-grid"
          onSubmit={sendEmail} 
          autoComplete="new-password"
        >
        <div className="grid-1">
        <input 
          className="contact-input"
          placeholder="Name*"
          name="name" 
          size="28"
          autoComplete="new-password"
          required
        />
        </div>
        <div className="grid-2">
        <input 
          className="contact-input"
          placeholder="Email Address*"
          size="28"
          name="email"
          autoComplete="new-password"
          required
        />
        </div>
        <div className="grid-3">
        <input 
          className="contact-input"
          placeholder="Phone Number"
          size="28"
          autoComplete="new-password"
          name="number"
        />
        </div>
        <div className="grid-4">
        <input 
          className="contact-input"
          placeholder="Subject*"
          size="28"
          autoComplete="new-password"
          name="subject"
          required
        />
        </div>
        <div className="grid-5">
        <textarea
          className="contact-body grid 5"
          placeholder="Please enter your query here..."
          name="body"
          required
        />
        </div>
        <div className="grid-6">
        <button 
          type="submit"
          className="contact-button">
          {isSubmitting}
        </button>
        </div>
      </form>
      </section>
      </div>
    </main>

  )
}
 
export default ContactMe;