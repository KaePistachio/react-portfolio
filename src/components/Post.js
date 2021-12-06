import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

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
    <main className="blog-bg">
      <section className="blog-container">
        <h1 className="blog-header cursive">
          Blog Posts Page
        </h1>
        <h2 className="blog-subheader">
          Welcome to my brand new blog
        </h2>
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
                    <h3 className="blog-title cursive">
                      { post.title }
                    </h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}