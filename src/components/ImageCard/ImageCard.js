import React from "react";
import CharacterList from "../../components/Characters.json";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

const Characters = (props) => {

    const randomize = () => {
        CharacterList.sort(() => Math.random() - 0.5)
    }
    randomize();

    return (
        <Row gutter={25}>
            {CharacterList.map(res => <Col
                xs={{ span: 4 }} sm={{ span: 3 }} md={{ span: 3 }} lg={{ span: 2 }} xl={{ span: 1 }}>
                <img className="characterImage" onClick={props.onClick} src={res.src} alt={res.alt}></img>
            </Col>
            )}
        </Row>
    )
}

export default Characters;