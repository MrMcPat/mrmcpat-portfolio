import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import weatherornotlogo from "../assets/weatherornotlogo.png";
import weatherornotclicked from "../assets/weatherornotclicked.png";
import overandunderlogo from "../assets/overandunderlogo.png";
import underandoverlogo from "../assets/underandoverlogo.png";
import brainfumblelogo from "../assets/brainfumblelogo.png";
import adagiologo from "../assets/adagiologo.png";
import allegrologo from "../assets/allegrologo.png";

import allegro1Vid from "../assets/Allegro1.mp4";
import allegro2Vid from "../assets/Allegro2.mp4";
import allegroNotif from "../assets/AllegroNotif.png";
import adagio1Vid from "../assets/adagio1.mp4";
import adagio2Vid from "../assets/adagio2.mp4";
import adagio3Vid from "../assets/adagio3.mp4";
import adagio4Vid from "../assets/adagio4.mp4";
import schema1Vid from "../assets/schema1.mp4";
import schema2Vid from "../assets/schema2.mp4";
import brainfumble1Vid from "../assets/brainfumble1.mp4";
import brainfumble2Vid from "../assets/brainfumble2.mp4";
import brainfumble3Vid from "../assets/brainfumble3.mp4";
import brainfumble4Vid from "../assets/brainfumble4.mp4";
import overandunderVid from "../assets/overandunder.mp4";
import weatherornotVid from "../assets/weatherornot.mp4";
import flipadamncoinVid from "../assets/flipadamncoin.mp4";

function Three() {
  const [project, setProject] = useState(6);

  const handleProject6 = () => setProject(6);
  const handleProject0 = () => setProject(0);
  const handleProject1 = () => setProject(1);
  const handleProject2 = () => setProject(2);
  const handleProject3 = () => setProject(3);
  const handleProject4 = () => setProject(4);
  const handleProject5 = () => setProject(5);

  return (
    <div id="group3" className="parallax-group">
      <div className="parallax-layer parallax-layer-base">
        <h1 style={{ textAlign: "center", margin: "20px" }}>Projects</h1>
        <div className="project-menu">
          <button onClick={handleProject6}>
            <img
              className={project === 6 ? "allegro" : ""}
              src={allegrologo}
              style={{ width: "50px" }}
              alt=""
            />
          </button>
          <button onClick={handleProject0}>
            <img
              className={project === 0 ? "adagio" : ""}
              src={adagiologo}
              style={{ width: "50px" }}
              alt=""
            />
          </button>
          <button
            className="schema"
            style={{ color: project === 1 ? "rgb(144, 223, 223)" : "white" }}
            onClick={handleProject1}
          >
            <span>sCheMA</span>
          </button>
          <button
            className={`${project === 2 ? "brainfumble" : ""}`}
            onClick={handleProject2}
          >
            <img src={brainfumblelogo} style={{ width: "60px" }} alt="" />
          </button>
          <button onClick={handleProject3}>
            <img
              src={project === 3 ? underandoverlogo : overandunderlogo}
              style={{ width: "100px", height: "40px" }}
              alt=""
            />
          </button>
          <button onClick={handleProject4}>
            <img
              src={project === 4 ? weatherornotclicked : weatherornotlogo}
              style={{ width: "50px" }}
              alt=""
            />
          </button>
          <button onClick={handleProject5}>
            <FontAwesomeIcon
              icon={faCoins}
              color={`${project === 5 ? "#F0A500" : "#ffc93c"}`}
              style={{ fontSize: "50px" }}
            />
          </button>
        </div>
        {project === 6 ? (
          <>
            <h2 style={{ textAlign: "center" }}>Allegro</h2>
            <p style={{ textAlign: "center" }}>
              A React Native mobile app for adjusting the user's sleep pattern
              by increments of minutes.
              <br />
              Technologies used: React Native, Ruby on Rails, PostgreSQL
            </p>
            <div className="project-body">
              <div className="project-element">
                <video width="200" height="400" autoPlay muted>
                  <source src={allegro1Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>Login and signup.</p>
              </div>
              <div className="project-element">
                <video width="200" height="400" autoPlay muted>
                  <source src={allegro2Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>Configuring the alarm and increments.</p>
              </div>
              <div className="project-element">
                <img
                  src={allegroNotif}
                  alt=""
                  style={{ width: "200px", height: "400px" }}
                />
                <p>Screenshot of example alarm firing.</p>
              </div>
            </div>
            <div className="project-footer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MrMcPat/allegro"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;
              <a href="">
                <FontAwesomeIcon icon={faEye} />
              </a>
            </div>
          </>
        ) : null}
        {project === 0 ? (
          <>
            <h2 style={{ textAlign: "center" }}>Adagio</h2>
            <p style={{ textAlign: "center" }}>
              Full stack application that acts as a platform where people can
              express themselves emotionally through music, colors, and
              journaling.
              <br />
              Technologies used: React, Ruby on Rails, PostgreSQL
            </p>
            <div className="project-body">
              <div className="project-element">
                <video width="420" height="200" autoPlay muted>
                  <source src={adagio1Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>Login page and inspirational lyric of the day.</p>
              </div>
              <div className="project-element">
                <video width="420" height="200" autoPlay muted>
                  <source src={adagio2Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>
                  Music recommendations based on how you feel
                  <br /> during the day.
                </p>
              </div>
              <div className="project-element">
                <video width="420" height="200" autoPlay muted>
                  <source src={adagio3Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>Journal Entry features, and user profiles.</p>
              </div>
              <div className="project-element">
                <video width="420" height="200" autoPlay muted>
                  <source src={adagio4Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>Forum post features.</p>
              </div>
            </div>
            <div className="project-footer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MrMcPat/adagio"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                href="https://adagio-app.herokuapp.com/"
              >
                <FontAwesomeIcon icon={faEye} />
              </a>
            </div>
          </>
        ) : null}
        {project === 1 ? (
          <>
            <h2 style={{ textAlign: "center" }}>SCHEMΔ</h2>
            <p style={{ textAlign: "center" }}>
              Video and streaming platform for software and game development
              related topics. Users can also stream their own content as well.
              <br />
              Technologies used: React, Ruby on Rails, PostgreSQL,
              RTMP(Real-Time Messaging Protocol)
            </p>
            <div className="project-body">
              <div className="project-element">
                <video width="500" height="270" autoPlay muted>
                  <source src={schema1Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>Viewing other videos and streams.</p>
              </div>
              <div className="project-element">
                <video width="500" height="270" autoPlay muted>
                  <source src={schema2Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>User streaming functionality.</p>
              </div>
            </div>
            <div className="project-footer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MrMcPat/schema"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                href="https://schema-project.herokuapp.com/"
              >
                <FontAwesomeIcon icon={faEye} />
              </a>
            </div>
          </>
        ) : null}
        {project === 2 ? (
          <>
            <h2 style={{ textAlign: "center" }}>Brain Fumble</h2>
            <p style={{ textAlign: "center" }}>
              A series of memory and visual minigames that the user can play.
              Users can save their scores in leaderboards.
              <br />
              Technologies used: React, Ruby/Sinatra, PostgreSQL{" "}
            </p>
            <div className="project-body">
              <div className="project-element">
                <video width="420" height="200" autoPlay muted>
                  <source src={brainfumble1Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>Sequence Memory.</p>
              </div>
              <div className="project-element">
                <video width="420" height="200" autoPlay muted>
                  <source src={brainfumble2Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>Number Memory.</p>
              </div>
              <div className="project-element">
                <video width="420" height="200" autoPlay muted>
                  <source src={brainfumble3Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>Color Match.</p>
              </div>
              <div className="project-element">
                <video width="420" height="200" autoPlay muted>
                  <source src={brainfumble4Vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>Leaderboards.</p>
              </div>
            </div>
            <div className="project-footer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MrMcPat/fumble-game"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mrmcpat.github.io/fumble-game/"
              >
                <FontAwesomeIcon icon={faEye} />
              </a>
            </div>
          </>
        ) : null}
        {project === 3 ? (
          <>
            <h2 style={{ textAlign: "center" }}>Over and Under</h2>
            <p style={{ textAlign: "center" }}>
              Front-end application that allows users to search recipes based on
              their fitness diet regimens.
              <br />
              Technologies used: React
            </p>
            <div className="project-body">
              <div>
                <video width="600" height="320" autoPlay muted>
                  <source src={overandunderVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="project-footer" style={{ marginTop: "40px" }}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MrMcPat/over-and-under"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mrmcpat.github.io/over-and-under"
              >
                <FontAwesomeIcon icon={faEye} />
              </a>
            </div>
          </>
        ) : null}
        {project === 4 ? (
          <>
            <h2 style={{ textAlign: "center" }}>Weather Or Not</h2>
            <p style={{ textAlign: "center" }}>
              Minimalistic weather application that advises the user if they
              need an umbrella for the day based on weather conditions.
              <br />
              Technologies used: JavaScript/HTML5/CSS3
            </p>
            <div className="project-body">
              <div>
                <video width="600" height="320" autoPlay muted>
                  <source src={weatherornotVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="project-footer" style={{ marginTop: "40px" }}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MrMcPat/Weather-Or-Not"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mrmcpat.github.io/Weather-Or-Not/"
              >
                <FontAwesomeIcon icon={faEye} />
              </a>
            </div>
          </>
        ) : null}
        {project === 5 ? (
          <>
            <h2 style={{ textAlign: "center" }}>Flip A Damn Coin</h2>
            <p style={{ textAlign: "center" }}>
              Coin flip decision making application, can choose between one
              flip, 2-3 flips, or 3-5 flips.
              <br />
              Technologies used: jQuery/Express.js/MongoDB
            </p>
            <div className="project-body">
              <div>
                <video width="600" height="320" autoPlay muted>
                  <source src={flipadamncoinVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="project-footer" style={{ marginTop: "40px" }}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MrMcPat/FlipADamnCoin"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                href="https://powerful-peak-24690.herokuapp.com/"
              >
                <FontAwesomeIcon icon={faEye} />
              </a>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Three;
