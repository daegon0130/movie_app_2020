import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        "This is a prototype of movie_Webapp"
        <br />
        <br />
      </span>
      <span>--- DaeGon Lee built this!!! ---</span>
    </div>
  );
}

export default About;
