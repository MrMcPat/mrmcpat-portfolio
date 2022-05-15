import React from "react";
import profilepic from "../assets/profilepic.png";

function Two() {
  return (
    <div id="bio" className="parallax-group">
      <div className="parallax-layer parallax-layer-base">
        <div className="profile">
          <img src={profilepic} alt="" />
          <div className="profile-description">
            <span>
              Graduated with a bachelor’s degree in Electrical Engineering, and
              having worked in the healthcare sector for three years, I am
              always avid in being hands on, learning new technologies and
              collaborating with others. I chose to abandon the path of
              tinkering with hardware to transition to software to fully expand
              on my creativity that I couldn't with hardware. Bringing my
              problem solving background and a team oriented mindset with me, I
              have shifted my career path to not just be a software
              developer/engineer but to be an effective critical thinker
              simultaneously. Outside of all this, I like to crack lame jokes,
              make memes, and having a good time with people :)
            </span>
          </div>
        </div>
      </div>
      <div className="parallax-layer parallax-layer-back"></div>
    </div>
  );
}

export default Two;
