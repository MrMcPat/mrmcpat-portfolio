import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Menu from "./Menu";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Menu />
          <div className="parallax">
            <One />
            <Two />
            <Three />
            <Four />
            <Five />
            <Six />
            <Seven />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
