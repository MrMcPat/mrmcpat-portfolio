import React from 'react'
import profilepic from '../assets/profilepic.png'

function Two() {
  return (
    <div id="group2" className="parallax-group">
    <div className="parallax-layer parallax-layer-base">
      <div className="profile">
      <img src={profilepic} alt=""/>
      <div className="profile-description">
      <span>Fullstack Software Engineer who specializes in React, Ruby, Ruby on Rails, PostgreSQL, Javascript, HTML, CSS. 
        Coming from an Electrical Engineering background, I am always avid in being hands on and learning new technologies. 
        I chose to abandon the path of tinkering with hardware to transition to software to fully expand on my creativity that 
        I couldn't with hardware. Bringing my problem solving background with me, I have shifted my career path to not just be a software 
        developer/engineer but to be an effective critical thinker simultaneously. Outside of all this, I like to crack lame jokes, make memes, 
        and having a good time with people :)
      </span>
      </div>
      </div>
    </div>
    <div className="parallax-layer parallax-layer-back">
    </div>
  </div>
  )
}

export default Two