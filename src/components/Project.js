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
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl text-indigo-900 flex justify-center cursive">
          Welcome To My Projects Page
        </h1>
        <h2 className="text-lg text-indigo-900 flex justify-center mb-12 cursive">
          Here are some of my most recent projects I have completed
        </h2>
        <section className="grid grid-cols-2 gap-8">
          { projectData && projectData.map((project, index) => (
          <article className="relative rounded-lg shadow-xl bg-white p-16">
            <h3 className="text-indigo-600 text-3xl font-bold mb-2 hover:text-green-300">
              <a
                href={project.link}
                alt={project.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
            </h3>
            <div className="text-indigo-400 text-xs space-x-4">
              <span>
                <strong className="font-bold">Finished On</strong>:{" "}
                { new Date(project.date).toLocaleDateString() }
              </span>
              <span>
              <strong className="font-bold">Company</strong>:{" "}
                { project.place }
              </span>
              <span>
                <strong className="font-bold">Type</strong>{" "}
                { project.projectType }
              </span>
              <p className="my-6 text-lg text-gray-700 leading-relaxed">
                { project.description }
              </p>
              <a 
                className="text-indigo-300 text-xl font-bold hover:underline hover:text-green-300"
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