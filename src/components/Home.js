import React from "react";
import image from "./palace-bowl.jpeg";

export default function Home() {
  return (
    <main>
      <img 
        src={image} 
        alt="Crystal Palace Bowl" 
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-1xl text-center text-indigo-200 font-bold cursive leading-snug lg:leading-snug home-name">
          Hey. I'm Nick
        </h1>
      </section>
    </main>
  )
}