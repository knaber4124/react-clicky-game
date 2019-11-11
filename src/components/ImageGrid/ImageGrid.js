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
            highScore: 0,
            message: ""
        };
    }

    handleImageClick = (props) => {
        if (this.state.clicked === false) {
            let newScore = this.state.score + 1;
            if (newScore > this.state.highScore) {
                this.setState({
                    highScore: newScore
                })
            }
            console.log(newScore);
            this.setState({
                clicked: true,
                score: newScore,
                message: "Good Job! Keep Going!"
            })
            console.log(this.state.message);
        }
        else if (this.state.clicked === true) {
            this.setState({
                clicked: false,
                score: 0,
                message: "You already clicked that image! Game Over!"
            })
            console.log(this.state.message);
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