import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import weatherornotlogo from "../assets/weatherornotlogo.png"
import weatherornotclicked from "../assets/weatherornotclicked.png"
import overandunderlogo from "../assets/overandunderlogo.png"
import underandoverlogo from "../assets/underandoverlogo.png"
import brainfumblelogo from "../assets/brainfumblelogo.png"
import adagiologo from "../assets/adagiologo.png"
import adagio1GIF from "../assets/adagio1.gif"
import adagio2GIF from "../assets/adagio2.gif"
import adagio3GIF from "../assets/adagio3.gif"
import adagio4GIF from "../assets/adagio4.gif"
import schema1GIF from "../assets/schema1.gif"
import schema2GIF from "../assets/schema2.gif"
import brainfumble1GIF from "../assets/brainfumble1.gif"
import brainfumble2GIF from "../assets/brainfumble2.gif"
import brainfumble3GIF from "../assets/brainfumble3.gif"
import brainfumble4GIF from "../assets/brainfumble4.gif"
import overandunderGIF from "../assets/overandunder.gif"
import weatherornotGIF from "../assets/weatherornot.gif"
import flipadamncoinGIF from "../assets/flipadamncoin.gif"

function Three() {
  const [project, setProject] = useState(0)

  const handleProject0 = () => setProject(0)
  const handleProject1 = () => setProject(1)
  const handleProject2 = () => setProject(2)
  const handleProject3 = () => setProject(3)
  const handleProject4 = () => setProject(4)
  const handleProject5 = () => setProject(5)

  return (
    <div id="group3" className="parallax-group">
      <div className="parallax-layer parallax-layer-base">
        <h1 style={{textAlign: "center", margin: "20px"}}>Projects</h1>
        <div className="project-menu">
          <button onClick={handleProject0}><img className={project === 0 ? "adagio" : ""} src={adagiologo} style={{width: "50px"}} alt=""/></button>
          <button className="schema" style={{color: project === 1 ? "rgb(144, 223, 223)" : "white"}}onClick={handleProject1}><span>sCheMA</span></button>
          <button className={`${project === 2 ? "brainfumble" : ""}`} onClick={handleProject2}><img src={brainfumblelogo} style={{width: "60px"}} alt=""/></button>
          <button onClick={handleProject3}><img src={project === 3 ? underandoverlogo : overandunderlogo} style={{width: "100px", height: "40px"}} alt=""/></button>
          <button onClick={handleProject4}><img src={project === 4 ? weatherornotclicked : weatherornotlogo} style={{width: "50px"}} alt=""/></button>
          <button onClick={handleProject5}><FontAwesomeIcon icon={faCoins} color={`${project === 5 ? "#F0A500" : "#ffc93c"}`}style={{fontSize: "50px"}}/></button>
        </div>
        {project === 0 ? 
        <>
        <h2 style={{textAlign: "center"}}>Adagio</h2>
        <p style={{textAlign: "center"}}>Full stack application that acts as a platform where people can express themselves emotionally through music, colors, and journaling.<br />Technologies used: React, Ruby on Rails</p>
        <div className="project-body">
          <div className="project-element">
          <img src={adagio1GIF} alt="adagio"/>
          <p>Login page and inspirational lyric of the day.</p>
          </div>
          <div className="project-element">
          <img src={adagio2GIF} alt="adagio"/>
          <p>Music recommendations based on how you feel<br /> during the day.</p>
          </div>
          <div className="project-element">
          <img src={adagio3GIF} alt="adagio"/>
          <p>Journal Entry features, and user profiles.</p>
          </div>
          <div className="project-element">
          <img src={adagio4GIF} alt="adagio"/>
          <p>Forum post features.</p>
          </div>
        </div>
        <div className="project-footer">
        <a target="_blank" rel="noreferrer" href="https://github.com/MrMcPat/adagio"><FontAwesomeIcon icon={faGithub}/></a>&nbsp;<a target="_blank" rel="noreferrer" href="https://adagio-app.herokuapp.com/"><FontAwesomeIcon icon={faEye}/></a>
        </div>
        </> : null}
        {project === 1 ? 
        <>
          <h2 style={{textAlign: "center"}}>SCHEMΔ</h2>
          <p style={{textAlign: "center"}}>Video and streaming platform for software and game development related topics. Users can also stream their own content as well.<br />Technologies used: React, Ruby on Rails, RTMP(Real-Time Messaging Protocol)</p>
          <div className="project-body">
          <div className="project-element">
          <img src={schema1GIF} className="double-gif" alt="schema"/>
          <p>Viewing other videos and streams.</p>
          </div>
          <div className="project-element">
          <img src={schema2GIF} className="double-gif" alt="schema"/>
          <p>User streaming functionality.</p>
          </div>
        </div>
        <div className="project-footer">
        <a target="_blank" rel="noreferrer" href="https://github.com/MrMcPat/schema"><FontAwesomeIcon icon={faGithub}/></a>&nbsp;<a target="_blank" rel="noreferrer" href="https://schema-project.herokuapp.com/"><FontAwesomeIcon icon={faEye}/></a>
        </div>
        </> : null}
        {project === 2 ? 
        <>
        <h2 style={{textAlign: "center"}}>Brain Fumble</h2>
        <p style={{textAlign: "center"}}>A series of memory and visual minigames that the user can play. Users can save their scores in leaderboards.<br />Technologies used: React, Ruby/Sinatra </p>
        <div className="project-body">
          <div className="project-element">
          <img src={brainfumble1GIF} alt="brain fumble"/>
          <p>Sequence Memory.</p>
          </div>
          <div className="project-element">
          <img src={brainfumble2GIF} alt="brain fumble"/>
          <p>Number Memory.</p>
          </div>
          <div className="project-element">
          <img src={brainfumble3GIF} alt="brain fumble"/>
          <p>Color Match.</p>
          </div>
          <div className="project-element">
          <img src={brainfumble4GIF} alt="brain fumble"/>
          <p>Leaderboards.</p>
          </div>
        </div>
        <div className="project-footer">
        <a target="_blank" rel="noreferrer" href="https://github.com/MrMcPat/fumble-game"><FontAwesomeIcon icon={faGithub}/></a>&nbsp;<a target="_blank" rel="noreferrer" href="https://mrmcpat.github.io/fumble-game/"><FontAwesomeIcon icon={faEye}/></a>
        </div>
        </>
        : null}
        {project === 3 ? 
        <>
        <h2 style={{textAlign: "center"}}>Over and Under</h2>
        <p style={{textAlign: "center"}}>Front-end application that allows users to search recipes based on their fitness diet regimens.<br />Technologies used: React</p>
        <div className="project-body">
          <div>
          <img src={overandunderGIF} className="single-gif" alt="over and under"/>
          </div>
        </div>
        <div className="project-footer" style={{marginTop: "40px"}}>
        <a target="_blank" rel="noreferrer" href="https://github.com/MrMcPat/over-and-under"><FontAwesomeIcon icon={faGithub}/></a>&nbsp;<a target="_blank" rel="noreferrer" href="https://mrmcpat.github.io/over-and-under"><FontAwesomeIcon icon={faEye}/></a>
        </div>
        </> : null}
        {project === 4 ? 
        <>
        <h2 style={{textAlign: "center"}}>Weather Or Not</h2>
        <p style={{textAlign: "center"}}>Minimalistic weather application that advises the user if they need an umbrella for the day based on weather conditions.<br />Technologies used: JavaScript/HTML5/CSS3</p>
        <div className="project-body">
          <div>
          <img src={weatherornotGIF} className="single-gif" alt="weather or not"/>
          </div>
        </div>
        <div className="project-footer" style={{marginTop: "40px"}}>
        <a target="_blank" rel="noreferrer" href="https://github.com/MrMcPat/Weather-Or-Not"><FontAwesomeIcon icon={faGithub}/></a>&nbsp;<a target="_blank" rel="noreferrer" href="https://mrmcpat.github.io/Weather-Or-Not/"><FontAwesomeIcon icon={faEye}/></a>
        </div>
        </> : null}
        {project === 5 ? 
        <>
        <h2 style={{textAlign: "center"}}>Flip A Damn Coin</h2>
        <p style={{textAlign: "center"}}>Coin flip decision making application, can choose between one flip, 2-3 flips, or 3-5 flips.<br />Technologies used: jQuery/Express.js/MongoDB</p>
        <div className="project-body">
          <div>
          <img src={flipadamncoinGIF} className="single-gif" alt="flip a damn coin"/>
          </div>
        </div> 
        <div className="project-footer" style={{marginTop: "40px"}}>
        <a target="_blank" rel="noreferrer" href="https://github.com/MrMcPat/FlipADamnCoin"><FontAwesomeIcon icon={faGithub}/></a>&nbsp;<a target="_blank" rel="noreferrer" href="https://powerful-peak-24690.herokuapp.com/"><FontAwesomeIcon icon={faEye}/></a>
        </div>
        </> : null}
      </div>
    </div>
  );
}

export default Three;
