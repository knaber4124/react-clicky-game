import React from "react";
import "./NavBar.css";
import ImageGrid from "../ImageGrid/ImageGrid";

function NavBar() {
  return (

    <div>
      <div className="row navbar fixed-top">
        <div className="col-md-4 label">
          <h2>Clicky-Game</h2>
        </div>
        <div className="col-md-4 label">
          <h2>{ImageGrid.message}</h2>
        </div>
        <div className="col-md-4 label">
          <h2>Score:{ImageGrid.score}</h2>
        </div>
      </div>
    </div>

  );
}

export default NavBar;