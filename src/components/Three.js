import React, { useState } from "react"
import schemaGIF from "../assets/schema.gif"
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
        <h1 style={{textAlign: "center"}}>Projects</h1>
        <div className="project-menu">
          <button onClick={handleProject0}>Adagio</button>
          <button onClick={handleProject1}>Schema</button>
          <button onClick={handleProject2}>Brain Fumble</button>
          <button onClick={handleProject3}>Over and Under</button>
          <button onClick={handleProject4}>Weather Or Not</button>
          <button onClick={handleProject5}>Flip a Damn Coin</button>
        </div>
        {project === 0 ? <div>
          Adagio
        </div> : null}
        {project === 1 ? <div>
          <img src={schemaGIF} />
        </div> : null}
        {project === 2 ? <div>
          <img src={brainfumble1GIF} />
        </div> : null}
        {project === 3 ? <div>
          <img src={overandunderGIF} />
        </div> : null}
        {project === 4 ? <div>
          <img src={weatherornotGIF} />
        </div> : null}
        {project === 5 ? <div>
          <img src={flipadamncoinGIF} />
        </div> : null}
      </div>
    </div>
  );
}

export default Three;
