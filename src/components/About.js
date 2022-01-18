import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import palaceBowl from "../images/palace-bowl.jpeg";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url"; 

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [ author, setAuthor ] = useState(null);
  
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          bio,
          "authorImage": image.asset->url
        }`
    )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, [])

  if (!author) return <div>Loading...</div>;

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
            src={ urlFor(author.authorImage).url() }
            alt={ author.name }
            className="about-img"
          />
          <div className="bio-div">
            <h1 className="bio-title mono-title"> 
              Hey there, I'm{" "}
              <span>
                { author.name }
              </span>
            </h1>
            <div className="about-bio prose mono">
            <BlockContent
              blocks={ author.bio }
              projectId="k3nabdae"
              dataset="production"
            />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}