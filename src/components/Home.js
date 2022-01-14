import React from "react";
import Typed from "react-typed";
import image from "./palace-bowl.jpeg";

export default function Home() {
  return (
    <main className="dark-mode">
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
          strings={["Aspiring Web Dev", "Guitar Hero", "Mortal Kombat Champion"]}
          loop
        />
      </div>
    </main>
  )
}