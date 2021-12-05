import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url"; 
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [ singlePost, setSinglePost ] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient.fetch(
      `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name,
        "authorImage": author->image
      }`
    )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])

  if (!singlePost) return <div>Loading...</div>;
  
  return (
    <main className="post-bg">
      <article className="post-text-container">
        <header className="post-header">
          <div className="post-div">
            <div className="post-title-div">
              <h1 className="post-title-text cursive">
                { singlePost.title }
              </h1> 
              <div className="author-div">
                <img 
                  src={ urlFor(singlePost.authorImage).url() }
                  alt={ singlePost.name }
                  className="author-thumbnail"
                />
                <p className="author-name cursive">
                  { singlePost.name }
                </p>
              </div>
            </div>
          </div>
          <img 
            src={ singlePost.mainImage.asset.url }
            alt={ singlePost.title }
            className="post-image"
            style={{ height: "400px" }}
          />
        </header>
        <div className="post-body-text standard prose">
          <BlockContent 
            blocks={ singlePost.body }
          />
        </div>
      </article>
    </main>
  )
}