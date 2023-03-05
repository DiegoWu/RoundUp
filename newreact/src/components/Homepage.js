import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "antd/lib/button";
import logo from "../logo.png";
import Typed from "react-typed";

import hoverSound from "../woman.mp3";
import hoverSound1 from "../sick.mp3";


function Homepage() {
  const [audio] = useState(new Audio(hoverSound));
  const [audio1] = useState(new Audio(hoverSound1), 100);

  const handleHover = () => {
    audio.play();
    audio1.play(); 
  };

  return (
    <div className="homepage-container">
      <Link to="/login">
        <img src={logo} alt="logo" onMouseOver={handleHover} />
      </Link>
      <h1 className="homepage-title">
        <Typed
          strings={["Made for Local Communities"]}
          typeSpeed={50}
          backSpeed={20}
          loop
        />
      </h1>
    </div>
  );
}

export default Homepage;
