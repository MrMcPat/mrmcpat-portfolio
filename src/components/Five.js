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
      <div className=" skills-container">
        <img src={reactLogo} />
        <img src={javascriptLogo} />
        <img src={html5Logo} />
        <img src={css3Logo} />
        <img src={rubyLogo} />
        <img src={railsLogo} />
        <img src={postgresqlLogo} />
        <img src={nodejsLogo} />
        <img src={gitLogo} />
      </div>
    </div>
  </div>
  )
}

export default Five