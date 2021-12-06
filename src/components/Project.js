import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

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
    <main className="projects-main">
      <section className="projects-container">
        <h1 className="projects-title cursive">
          Welcome To My Projects Page
        </h1>
        <h2 className="projects-desc cursive">
          Here are some of my most recent projects I have completed
        </h2>
        <section className="projects-grid">
          { projectData && projectData.map((project, index) => (
          <article className="project-article">
            <h3 className="project-title">
              <a
                href={project.link}
                alt={project.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
            </h3>
            <div className="project-details">
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
              <a 
                className="project-link"
                href={ project.link }
                rel="noopener noreferrer" 
                target="_blank"
              >
                View Project{" "}
                <span role="img" aria-label="right pointer">
                  👉🏻 
                </span>
              </a>
            </div>
          </article>
          ))}
        </section>
      </section>
    </main>
  )
}