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
            duplicate: "You Already Clicked on That Image",
            original: "Good Job!"
        };
    }

    handleImageClick = event => {
        console.log("clicked");
        if (this.state.clicked === false) {
            let newScore = this.state.score + 1
            console.log(this.state.original);
            console.log(newScore);
            this.setState({
                clicked: true,
                score: newScore
            })
        }
        else if (this.state.clicked === true) {
            console.log(this.state.duplicate);
            this.setState({

            })
        }



    }


    render() {
        return (
            <div>
                <Characters
                    onClick={this.handleImageClick} />
            </div>)
    }
}

export default ImageGrid;