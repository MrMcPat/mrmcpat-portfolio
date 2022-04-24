import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Seven() {
  return (
    <div id="group7" className="parallax-group">
    <div className="parallax-layer parallax-layer-base">
      <div className="title">
        <h1>Contact Me</h1>
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  </div>
  )
}

export default Seven