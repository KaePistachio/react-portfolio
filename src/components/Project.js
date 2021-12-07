import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "./palace-bowl.jpeg";

export default function Project() {
  const [ projectData, setProjectData ] = useState(null);

  useEffect(() => {
    sanityClient.fetch( 
      `*[_type == "project"] {
        title,
        date,
        place,
        description,
        projectType,
        link,
        tags  
      }`
    )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="projects-bg">
      <img 
        src={image} 
        alt="Crystal Palace Door"
        className="projects-bg" 
      />
      <div className="bg-layer autumn">
      </div>
      <section className="projects-section">
        <h1 className="projects-title cursive">
          Welcome To My Projects Page
        </h1>
        <div className="projects-desc-div">
        <h2 className="projects-desc mono">
          Here are some of my most recent projects I have completed
        </h2>
        </div>
        <section className="projects-grid">
          { projectData && projectData.map((project, index) => (
          <article className="project-article">
            <h3 className="project-title cursive">
              <a
                href={project.link}
                alt={project.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
            </h3>
            <div className="project-details mono">
              <span className="project-span">
                <strong className="font-bold">Finished On</strong>:{" "}
                { new Date(project.date).toLocaleDateString() }
              </span>
              <span className="project-span">
              <strong className="font-bold">Company</strong>:{" "}
                { project.place }
              </span>
              <span className="project-span">
                <strong className="font-bold">Type</strong>{" "}
                { project.projectType }
              </span>
              <p className="project-desc">
                { project.description }
              </p>
              <div className="project-link-div">
              <a 
                className="project-link mono"
                href={ project.link }
                rel="noopener noreferrer" 
                target="_blank"
              >
                View Project {`>>>`}
              </a>
              </div>
            </div>
          </article>
          ))}
        </section>
      </section>
    </main>
  )
}