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
            score: 0,
            topScore: "",
            message: ""
        };
    }

    handleImageClick = event => {
        console.log("clicked");
        if (this.state.clicked === false) {
            let newScore = this.state.score + 1
            console.log(newScore);
            this.setState({
                clicked: true,
                score: newScore,
                message: "Good Job!"
            })
        }
        else if (this.state.clicked === true) {
            this.setState({
                score: 0,
                message: "You already clicked that image!"

            })
        }



    }


    render() {
        return (
            <div>
                <Characters
                    onClick={this.handleImageClick} />
            </div>
        )
    }
}

export default ImageGrid;