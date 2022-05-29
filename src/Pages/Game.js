import React from "react";

import { renderIconsAndNames } from "../Helpers/helperFunctions";

import levelObjects from "../Assets/levelObjects";

const Game = (props) => {

    const levelObj = levelObjects[props.level - 1];

    return (
        <div className="game-wrapper">
            <div className="game-information-banner">
                <p className="game-information-banner-text"> Level {props.level}</p>
                <div className="game-char-icons">
                    { renderIconsAndNames(levelObj, "both")}
                </div>
            
                <button className="game-start-btn"> Click to Start! </button>
                <a href="/home">Return Home</a>
            </div>
            
            <img className="game-image" src={levelObj.src} alt=""></img>
        </div>

    )
    
}

export default Game;