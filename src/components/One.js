import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function One() {
  return (
    <div id="home" className="parallax-group">
      <div className="parallax-layer parallax-layer-base">
        <div className="title">
          <div className="title-container">
            <div className="header">
              <p className="line-1 anim-typewriter">
                Patrick Liang Fullstack Software Engineer
              </p>
            </div>
            &nbsp;
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: "45px", color: "white" }}
            />
          </div>
          <br />
          <p className="title-animate1">Results returned.</p>
          <br />
          <br />
          <div className="title-animate2">
            <p>The resume of Patrick Liang</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/11AMrHQvQE6OgYlq0RAwoKrDD2Xk_5OLCPHZqM8sCRK0/edit"
            >
              <FontAwesomeIcon
                icon={faFile}
                style={{ fontSize: "100px", color: "white" }}
              />
            </a>
          </div>
          <div className="title-animate3">
            <p>Scroll down to see more.</p>
            <FontAwesomeIcon className="title-animate4" icon={faAngleDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default One;
