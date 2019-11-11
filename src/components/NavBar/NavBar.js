import React from "react";
import "./NavBar.css";
import ImageGrid from "../ImageGrid/ImageGrid";

function NavBar(props) {
  return (

    <div>
      <div className="row navbar fixed-top">
        <div className="col-md-4 label">
          <h2>Clicky-Game</h2>
        </div>
        <div className="col-md-4 label">
          <h2>{props.message}</h2>
        </div>
        <div className="col-md-4 label">
          <h3>Score:{props.score}</h3>
          <h3>High Score:{props.highScore}</h3>
        </div>
      </div>
    </div>

  );
}

export default NavBar;