import React from "react";
import Typed from "react-typed";
import image from "../images/palace-bowl.jpeg";

export default function Home() {
  return (
    <main className="main-format">
      <img 
        src={image} 
        alt="Crystal Palace Bowl" 
        className="bg-img"
      />
      <div className="bg-layer spring"></div>
      <section className="home-title">
        <h1 className="home-title-text mono-title">
          Welcome To My Site
        </h1>
      </section>
      <div className="type-div">
        <Typed
          className="type-fx mono-title"
          strings={["Front-End Developer", "Javascript", "React", "Single Page Applications", "Wordpress", "jQuery", "Next.js"]}
          loop
        />
      </div>
    </main>
  )
}