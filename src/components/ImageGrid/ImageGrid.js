import React, { Component } from "react";
import "./ImageGrid.css";
import CharacterList from "../../components/Characters.json";


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
        console.log(CharacterList);
        this.loadGrid();
    }

    loadGrid = () => {
        return (
            <div className="character">
                {CharacterList.map(
                    res => <div key={res}>
                        <img className="characterImage" src={res.src} alt={res.alt}></img>
                    </div>

                )}

            </div>
        )
    }


    render() {
        return (
            <div>
                {this.state.image}

            </div >


        )
    }
}

export default ImageGrid;