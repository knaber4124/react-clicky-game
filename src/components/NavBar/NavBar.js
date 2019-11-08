import React from "react";
import "./NavBar.css";

function NavBar() {
  return (

    <div>
      <div className="row navbar fixed-top">
        <div className="col-md-4 label">
          <h2>Clicky-Game</h2>
        </div>
        <div className="col-md-4 label">
          <h2>Alert Result</h2>
        </div>
        <div className="col-md-4 label">
          <h2>Display Score</h2>
        </div>
      </div>
    </div>

  );
}

export default NavBar;