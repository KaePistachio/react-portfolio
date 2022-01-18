import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import image from "../images/palace-bowl.jpeg";

export default function Post() {
  const [ postData, setPost ] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
      }`)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <main className="main-format">
      <img 
        src={ image }
        alt="Crystal Palace Bowl"
        className="bg-img"
      />
      <div className="bg-layer dawn"></div>
      <div className="content-shell">
        <section className="blog-section">
          <h1 className="blogs-title mono-title">
            Blog Posts Page
          </h1>
          <div className="blogs-desc-div">
          <h2 className="blogs-desc mono">
            Welcome to my brand new blog
          </h2>
          </div>
          <div className="blog-posts-div">
            { postData && postData.map((post, index) => (
              <article>
                <Link 
                  to={"/post/" + post.slug.current} 
                  key={post.slug.current}
                >
                  <span 
                    className="blog-post"
                    key={index}
                  >
                    <img 
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="blog-post-image"
                    />
                    <span className="blog-title-container">
                      <h3 className="blog-title mono">
                        { post.title }
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}