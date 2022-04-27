import React, {useState} from 'react'
import Email from './Email'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
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
      <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip>
          My Linkedin
        </Tooltip>
      }
    ><button style={{background: "transparent", border: "none", color: "white"}}><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patrick-liang-42525b14b"><FontAwesomeIcon className="contact" icon={faLinkedin} /></a></button>
    </OverlayTrigger>
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip>
          My Github
        </Tooltip>
      }
    >
        <button style={{background: "transparent", border: "none", color: "white"}}><a target="_blank" rel="noreferrer" href="https://github.com/MrMcPat"><FontAwesomeIcon className="contact" icon={faGithub} /></a></button>
    </OverlayTrigger>
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip>
          Email me!
        </Tooltip>
      }
    >
    <button style={{background: "transparent", border: "none", color: "white"}}><FontAwesomeIcon className="contact" onClick={handleShow} icon={faEnvelope} /></button>
    </OverlayTrigger>
      </div>
    </div>
    <Email show={show} handleClose={handleClose}/>
  </div>
  )
}

export default Seven