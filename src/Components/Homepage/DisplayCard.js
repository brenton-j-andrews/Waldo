import React from "react";


import { renderIcons } from "../../Helpers/helperFunctions";

const DisplayCard = (props) => {

    return (
        <div className="display-card" onClick={props.clicked}> 
            <p className="level-text"> Level {props.id} </p>
            <img className="level-select-mini-map" src={props.src} alt="level"></img>
            <div className="display-card-level-info">
                { renderIcons(props) }
                <p className="difficulty-text"> Difficulty: {props.difficulty}</p>
            </div>
        </div>
    )
}

export default DisplayCard;