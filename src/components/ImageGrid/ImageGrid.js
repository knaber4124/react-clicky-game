import React, { Component } from "react";
import "./ImageGrid.css";
import CharacterList from "../../components/Characters.json";
import ImageDiv from "../ImageDiv/ImageDiv";


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
    componentDidMount() {
        this.loadGrid();
    }

    loadGrid = () => {
        return (
            <div className="character">
                {CharacterList.map(
                    res => (<div key={res}>
                        <img className="characterImage" src={res.src} alt={res.alt}></img>
                    </div>
                    // (this.setState({
                    //     image: this.res.src,
                    //     alt: this.res.alt
                    // })))

                ))}
            </div>
        )
    }


    render() {
        return (
            <div>
                <div className="row">
                    <ImageDiv image={this.image} />
                </div>
            </div >
        )
    }
}

export default ImageGrid;