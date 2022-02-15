import React from "react";
import image from "../images/palace-bowl.jpeg";
import thumb from "../images/catch.png";
import thumb2 from "../images/foxy.png";
import thumb3 from "../images/rock.png";

export default function Project() {
  return (
    <main className="main-format">
      <img 
        src={image} 
        alt="Crystal Palace Door"
        className="bg-img" 
      />
      <div className="bg-layer autumn">
      </div>
      <div className="content-shell">
        <h1 className="projects-title mono-title">
          Welcome To My Projects Page
        </h1>
        <div className="projects-container">
          <h2 className="projects-desc mono">
            Below is a list of links to portfolio projects I have completed, as well as information on 
            any freelance work I have undertaken so far.
          </h2>
          <article  
            className="project-summary"
          >
            <a 
              href="https://serene-rosalind-af5306.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="navlink-project mono"
            >
              Catch of the day {`>>>`}
            </a>
            <p className="project-blurb mono">
              For this project I created an SPA for an online fish market that uses React to process orders, update information
              on inventory and prices of fish using global state backed up by Firebase.
            </p>
            <div class="thumb-container">
            <a
              href="https://serene-rosalind-af5306.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-thumbnail"
            >
              <img 
                className="project-thumbnail"
                src={thumb}
                alt="catch of the day"
              />
              <div class="overlay">
                <div class="thumblink-text mono-title">Click To View Project</div>
              </div>
            </a>
            </div>
          </article>
          <article  
            className="project-summary"
          >
            <a 
              href="https://xenodochial-aryabhata-03b77d.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="navlink-project mono"
            >
              The Fox Blog {`>>>`}
            </a>
            <p className="project-blurb mono">
              This was my first attempt at creating a simple CRUD application with react. I decided to create a blog page
              using json-server to simulate a back end that can handle PUT, GET, UPDATE {`&`} DELETE requests, as well 
              as a random name generator option when choosing an author for the post.
            </p>
            <div class='thumb-container'>
            <a
              href="https://xenodochial-aryabhata-03b77d.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-thumbnail"
            >
              <img 
                className="project-thumbnail"
                src={thumb2}
                alt="catch of the day"
              />
              <div class="overlay">
                <div class="thumblink-text mono-title">Click To View Project</div>
              </div>
            </a>
            </div>
          </article>
          <article  
            className="project-summary"
          >
            <a 
              href="https://https://berkshire.therockproject.com/"
              target="_blank"
              rel="noreferrer"
              className="navlink-project mono"
            >
              The Rock Project {`>>>`}
            </a>
            <p className="project-blurb mono">
              My first freelance job required me to work with PHP {`&`} to set up a page that could be
              accessed through Wordpress automate the process of adding tutor information to a grid. This would ease use
              for the client and allow them to link through to a page with more details on each individual. 
            </p>
            <div class="thumb-container">
            <a
              href="https://https://berkshire.therockproject.com/"
              target="_blank"
              rel="noreferrer"
              className="project-thumbnail"
            >
              <img 
                className="project-thumbnail"
                src={thumb3}
                alt="catch of the day"
              />
              <div class="overlay">
                <div class="thumblink-text mono-title">Click To View Project</div>
              </div>
            </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}