import React from "react";
import emailjs from "emailjs-com";

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
        <div className="contact-form-container">
            <form onSubmit={sendEmail} >
            <input 
              className="contact-input"
              placeholder="Name"
              name="name"
              required
            />
            <input 
              className="contact-input"
              placeholder="Email Address"
              name="email"
              required
            />
            <input 
              className="contact-input"
              placeholder="Phone Number"
              name="number"
            />
            <input 
              className="contact-input"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              className="contact-body"
              placeholder=""
              name="body"
            />
            <button 
              type="submit"
              className="contact-button">
              Submit
            </button>
            </form>
        </div>
      </article>
    </main>

  )
}
 
export default ContactMe;