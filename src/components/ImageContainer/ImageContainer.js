import React from "react";
import ("./ImageContainer.css");

function ImageContainer(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""} imageContainer`} {...props} />;
}

export default ImageContainer;
