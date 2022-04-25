import React, {useState} from 'react'
import Email from './Email'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Seven() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div id="group7" className="parallax-group">
    <div className="parallax-layer parallax-layer-base">
      <div className="title">
        <h1>Contact Me</h1>
        <a target="_blank" href="https://www.linkedin.com/in/patrick-liang-42525b14b"><FontAwesomeIcon className="contact" icon={faLinkedin} /></a>
        <a target="_blank" href="https://github.com/MrMcPat"><FontAwesomeIcon className="contact" icon={faGithub} /></a>
        <FontAwesomeIcon className="contact" onClick={handleShow} icon={faEnvelope} />
      </div>
    </div>
    <Email show={show} handleClose={handleClose}/>
  </div>
  )
}

export default Seven