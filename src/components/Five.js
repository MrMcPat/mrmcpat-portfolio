import React from 'react'
import reactLogo from "../assets/react.png"
import javascriptLogo from "../assets/javascript.png"
import html5Logo from "../assets/html5.png"
import css3Logo from "../assets/css3.png"
import rubyLogo from "../assets/ruby.png"
import railsLogo from "../assets/rails.png"
import postgresqlLogo from "../assets/postgresql.png"
import nodejsLogo from "../assets/nodejs.png"
import gitLogo from "../assets/git.png"


function Five() {
  return (
    <div id="group5" className="parallax-group">
    <div className="parallax-layer parallax-layer-base">
      <div className="title">
      <h1 style={{marginBottom: "30px"}}>Skills</h1>
      <div className=" skills-container">
        <div><img src={reactLogo} /><p>React</p></div>
        <div><img src={javascriptLogo} /><p>Javascript</p></div>
        <div><img src={html5Logo} /><p>HTML5</p></div>
        <div><img src={css3Logo} /><p>CSS3</p></div>
        <div><img src={rubyLogo} /><p>Ruby</p></div>
        <div><img src={railsLogo} /><p>Ruby on Rails</p></div>
        <div><img src={postgresqlLogo} /><p>PostgreSQL</p></div>
        <div><img src={nodejsLogo} /><p>Node.js</p></div>
        <div><img src={gitLogo} /><p>Git</p></div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Five