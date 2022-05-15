import React from "react";
import reactLogo from "../assets/react.png";
import javascriptLogo from "../assets/javascript.png";
import html5Logo from "../assets/html5.png";
import css3Logo from "../assets/css3.png";
import rubyLogo from "../assets/ruby.png";
import railsLogo from "../assets/rails.png";
import postgresqlLogo from "../assets/postgresql.png";
import nodejsLogo from "../assets/nodejs.png";
import gitLogo from "../assets/git.png";

function Five() {
  return (
    <div id="group5" className="parallax-group">
      <div className="parallax-layer parallax-layer-base">
        <div className="title">
          <h1 style={{ marginBottom: "30px" }}>Skills</h1>
          <div className=" skills-container">
            <div>
              <img src={reactLogo} alt="" />
              <p>React/React Native</p>
            </div>
            <div>
              <img src={javascriptLogo} alt="" />
              <p>Javascript</p>
            </div>
            <div>
              <img src={html5Logo} alt="" />
              <p>HTML5</p>
            </div>
            <div>
              <img src={css3Logo} alt="" />
              <p>CSS3</p>
            </div>
            <div>
              <img src={rubyLogo} alt="" />
              <p>Ruby</p>
            </div>
            <div>
              <img src={railsLogo} alt="" />
              <p>Ruby on Rails</p>
            </div>
            <div>
              <img src={postgresqlLogo} alt="" />
              <p>PostgreSQL</p>
            </div>
            <div>
              <img src={nodejsLogo} alt="" />
              <p>Node.js</p>
            </div>
            <div>
              <img src={gitLogo} alt="" />
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Five;
