import React, { useState } from "react";

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
        {project === 0 ? <div>0</div> : null}
        {project === 1 ? <div>1</div> : null}
        {project === 2 ? <div>2</div> : null}
        {project === 3 ? <div>3</div> : null}
        {project === 4 ? <div>4</div> : null}
        {project === 5 ? <div>5</div> : null}
      </div>
    </div>
  );
}

export default Three;
