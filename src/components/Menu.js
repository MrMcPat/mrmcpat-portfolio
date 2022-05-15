import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <div className="menu-bar">
      <a href="#home">
        <FontAwesomeIcon icon={faArrowUp} fontSize={30} />
      </a>
      <br />
      <a href="#bio">
        <FontAwesomeIcon icon={faUser} fontSize={30} />
      </a>
      <br />
      <a href="#projects">
        <FontAwesomeIcon icon={faCode} fontSize={30} />
      </a>
      <br />
      <a href="#contactme">
        <FontAwesomeIcon icon={faMessage} fontSize={30} />
      </a>
      <br />
    </div>
  );
}

export default Menu;
