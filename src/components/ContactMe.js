import React from "react";
import emailjs from "emailjs-com";
import image from "./palace-bowl.jpeg";

const ContactMe = () => {
  const serviceId = "nwdevpassthrough";
  const templateId = "template_ac7lagu";
  const userId = "user_j4c0V4ZrBMna5X9uxYFo5";

  const sendEmail = (e) => {
    console.log("sending email")
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {                 
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <main className="contact-bg">
      <img 
        className="contact-bg"
        src={image}
        alt="crystal Palace Bowl"
      />
      <article className="contact-me">
        <div className="contact-header">
          <h1 className="cursive">
            Contact Me
          </h1>
          <p>
            Please fill out the contact form with any requests or needs and I will get back to you ASAP.<br />
            Thanks!
          </p>
        </div>
            <div className="contact-grid">
              <form onSubmit={sendEmail} >
              <div className="grid-1">
              <input 
                className="contact-input"
                placeholder="Name *"
                name="name"
                required
              />
              </div>
              <div className="grid-2">
              <input 
                className="contact-input"
                placeholder="Email Address *"
                name="email"
                required
              />
              </div>
              <div className="grid-3">
              <input 
                className="contact-input"
                placeholder="Phone Number"
                name="number"
              />
              </div>
              <div className="grid-4">
              <input 
                className="contact-input"
                placeholder="Subject *"
                name="subject"
              />
              </div>
              <div className="grid-5">
              <textarea
                className="contact-body"
                placeholder="Please enter your query here..."
                name="body"
              />
              </div>
              <div className="grid-6">
              <button 
                type="submit"
                className="contact-button">
                Submit
              </button>
              </div>
              </form>
            </div>
      </article>
    </main>

  )
}
 
export default ContactMe;