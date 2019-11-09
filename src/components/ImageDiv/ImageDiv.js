import React from "react";
import "./ImageDiv.css";

function ImageDiv(props){
    return(
        
            <div className = "col-3-md" style ={{backgroundImage:props.image}}>
            </div>
        
    )
}

export default ImageDiv;