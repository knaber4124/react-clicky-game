import React, { Component } from "react";
import "./ImageGrid.css";
// import CharacterList from "../../components/Characters.json";
// import Characters from "../ImageCard/ImageCard";
// import ImageDiv from "../ImageDiv/ImageDiv";
import Characters from "../ImageCard/ImageCard";


class ImageGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            image: "",
            score: "",
            topScore: "",
        };
    }


    render() {
        return (
            <div>
                <div className="row">
                    <Characters />
                </div>
            </div >
        )
    }
}

export default ImageGrid;