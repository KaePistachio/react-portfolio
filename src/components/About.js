import React, { useState, useEffect } from "react";
import palaceBowl from "../images/palace-bowl.jpeg";
import bio1 from "../images/swiss.png"; 
import bio2 from "../images/bio.jpeg";
import bio3 from "../images/guitar.png";



export default function About() {
  const images = [bio1, bio2, bio3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        if(currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } 
        else {
             setCurrentIndex(currentIndex + 1);
        }
    }, 3000)
    
    return () => clearInterval(intervalId);
})

  return (
    <main className="main-format">
      <img 
        src={ palaceBowl }
        alt="Crystal Palace Bowl"
        className="bg-img"
      />
      <div className="bg-layer winter">
      </div>
      <div className="content-shell">
        <section className="about-container">
          <img 
            src={ images[currentIndex] }
            alt="me"
            className="about-img"
          />
          <div className="bio-div">
            <h1 className="bio-title mono-title"> 
              Hey there, I'm Nick
            </h1>

            {<div className="about-bio prose mono">
            At the start of the global pandemic I chose to rethink my career path. 
            Having come from a background in music and audio, 
            I knew my future would not be secure where the majority of my work 
            came from events work and live sound.<br/><br/>
            I have been studying web development for some time and have completed
            multiple courses on Codecademy as well as many other resources from 
            across the web including udemy. My passion for coding has grown as 
            I learn more every day and am sure I am currently at a level where 
            I could confidently step into a junior front-end role and meet if not surpass expectations.<br/><br/>
            As I completed the full stack course on Codecademy I do have some familiarity across the entire stack, 
            with a working knowledge of mySQL, PHP, Python {`&`} Data Structures. 
            My main focus however has been on developing an in depth understanding 
            of the fundamentals of HTML/CSS, and have put most my time into both 
            vanilla JS and React / JSX. My ideal starting role would be as a junior 
            React dev, but am open to any role on the front end where I can learn 
            on the job and be mentored to becoming a highly valued asset in the field.<br/><br/>
            I have many years of work experience in various roles that dealt with high pressure, 
            customer facing and micro management. And I am certain that I possess a wide variety 
            necessary soft skills to rapidly assimilate myself within any work force.
            </div>}
          </div>
        </section>
      </div>
    </main>
  )
}