import React from "react";
import YouTubePlaylist from 'react-youtube-playlist';
import '/Users/kaepae/Documents/cc_projects/portfolio/react-portfolio/node_modules/react-youtube-playlist';
import image from "../images/palace-bowl.jpeg";

export default function Post() {

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
            Personal Interests {`&`} Info
          </h1>
        </section>
        <section className="about-container">
        <YouTubePlaylist
          width={'85%'}
          height={390}
          api_key='YAIzaSyDAD1dfv8SFHbb5I3k-4OEq3DhBvOpHt_M'
          playlist_id='PLjTonpLiRXv93lZdfBEWn4aqLon-LbH-E'
          show_thumbnails
        />
        </section>
      </div>
    </main>
  )
}