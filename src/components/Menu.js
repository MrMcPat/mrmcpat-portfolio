import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <div className="menu-bar">
      <OverlayTrigger placement="left" overlay={<Tooltip>Back to Top</Tooltip>}>
        <div>
          <a href="#home">
            <FontAwesomeIcon icon={faArrowUp} fontSize={30} />
          </a>
        </div>
      </OverlayTrigger>
      <OverlayTrigger placement="left" overlay={<Tooltip>Bio</Tooltip>}>
        <div>
          <a href="#bio">
            <FontAwesomeIcon icon={faUser} fontSize={30} />
          </a>
        </div>
      </OverlayTrigger>
      <OverlayTrigger placement="left" overlay={<Tooltip>Projects</Tooltip>}>
        <div>
          <a href="#projects">
            <FontAwesomeIcon icon={faCode} fontSize={30} />
          </a>
        </div>
      </OverlayTrigger>
      <OverlayTrigger placement="left" overlay={<Tooltip>Contact Me</Tooltip>}>
        <div>
          <a href="#contactme">
            <FontAwesomeIcon icon={faMessage} fontSize={30} />
          </a>
        </div>
      </OverlayTrigger>
    </div>
  );
}

export default Menu;
