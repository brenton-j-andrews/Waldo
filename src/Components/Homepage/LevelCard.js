import React from "react";

const DisplayCard = (props) => {
    return (
        <div className="display-card"> 
            Level {props.id}
            <img className="level-select-mini-map" src={props.src} alt="level"></img>

            <div className="display-card-level-info">
                This is the level information!
            </div>
        </div>
    )
}

export default DisplayCard;