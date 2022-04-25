import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from "@fortawesome/free-solid-svg-icons"
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
        <h1 style={{textAlign: "center", margin: "10px"}}>Projects</h1>
        <div className="project-menu">
          <button onClick={handleProject0}><img className={project === 0 ? "adagio" : ""} src={adagiologo} style={{width: "50px"}} alt=""/></button>
          <button className="schema" style={{color: project === 1 ? "rgb(144, 223, 223)" : "white"}}onClick={handleProject1}><span>sCheMA</span></button>
          <button className={`${project === 2 ? "brainfumble" : ""}`} onClick={handleProject2}><img src={brainfumblelogo} style={{width: "60px"}} alt=""/></button>
          <button onClick={handleProject3}><img src={project === 3 ? underandoverlogo : overandunderlogo} style={{width: "100px", height: "40px"}} alt=""/></button>
          <button onClick={handleProject4}><img src={project === 4 ? weatherornotclicked : weatherornotlogo} style={{width: "50px"}} alt=""/></button>
          <button onClick={handleProject5}><FontAwesomeIcon icon={faCoins} color={`${project === 5 ? "#F0A500" : "#ffc93c"}`}style={{fontSize: "50px"}}/></button>
        </div>
        {project === 0 ? <div className="project-body">
        <img src={adagio1GIF} alt="adagio"/>
        <img src={adagio2GIF} alt="adagio"/>
        <img src={adagio3GIF} alt="adagio"/>
        <img src={adagio4GIF} alt="adagio"/>
        </div> : null}
        {project === 1 ? <div className="project-body">
          <img src={schema1GIF} alt="schema"/>
          <img src={schema2GIF} alt="schema"/>
        </div> : null}
        {project === 2 ? <div className="project-body">
          <img src={brainfumble1GIF} alt="brain fumble"/>
          <img src={brainfumble2GIF} alt="brain fumble"/>
          <img src={brainfumble3GIF} alt="brain fumble"/>
          <img src={brainfumble4GIF} alt="brain fumble"/>
        </div> : null}
        {project === 3 ? <div className="project-body">
          <img src={overandunderGIF} style={{width: "50vw"}} alt="over and under"/>
        </div> : null}
        {project === 4 ? <div className="project-body">
          <img src={weatherornotGIF} style={{width: "50vw"}} alt="weather or not"/>
        </div> : null}
        {project === 5 ? <div className="project-body">
          <img src={flipadamncoinGIF} style={{width: "50vw"}} alt="flip a damn coin"/>
        </div> : null}
      </div>
    </div>
  );
}

export default Three;
