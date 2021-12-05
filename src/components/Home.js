import React from "react";
import image from "./palace-bowl.jpeg";
import Typed from "react-typed";

export default function Home() {
  return (
    <main>
      <img 
        src={image} 
        alt="Crystal Palace Bowl" 
        className="home-bg"
      />
      <section className="home-title">
        <h1 className="home-title-text cursive">
          Hey. I'm Nick
        </h1>
      </section>
      <div className="type-div">
          <Typed
            className="type-fx mono"
            strings={["Aspiring Web Dev", "Guitar Hero", "Mortal Kombat Champion"]}
            loop
          />
        </div>
    </main>
  )
}