import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import Dropdown from "../Components/Game/Dropdown";

import { renderIconsAndNames } from "../Helpers/helperFunctions";
import levelObjects from "../Assets/levelObjects";

const IMAGE_HEIGHT = 650;
const IMAGE_WIDTH = 1000;

const Game = (props) => {

    let [showDropdown, setShowDropdown] = useState(false);
    let [clickLoc, setClickLoc] = useState({ left: "52.4%", top: "0%"});

    const levelObj = levelObjects[props.level - 1];

    // Called on clicking the image, event data parsed in other functions.
    const onImageClick = (e) => {
        setShowDropdown(true);
        fetchCoordinates(e);
    }

    // Fetch and set clicked coordinates from click event.
    const fetchCoordinates = (e) => {
        let x_coord = e.nativeEvent.offsetX;
        let y_coord = e.nativeEvent.offsetY;
        console.log(x_coord);
        let x_dropdown_percentage = Math.round(( (x_coord - 50) / IMAGE_WIDTH ) * 100);
        let y_dropdown_percentage = Math.round(( (y_coord - 27) / IMAGE_HEIGHT ) * 100);
        setClickLoc({ left: `${x_dropdown_percentage}%`, top: `${y_dropdown_percentage}%` });
    }

    // Toggle dropdown menu view boolean.
    const hideDropDown = () => {
        setShowDropdown(false);
    }

    return (
        <div className="game-wrapper">
            <div className="game-information-banner">
                <p className="game-information-banner-text"> Level {props.level}</p>
                <div className="game-char-icons">
                    { renderIconsAndNames(levelObj, "display")}
                </div>
            
                <button className="game-start-btn"> Click to Start! </button>
                <a href="/home">Return Home</a>
            </div>
            
            <div className="game-field">

                <OutsideClickHandler display="contents" onOutsideClick={hideDropDown} >
                    <img 
                        className="game-image" 
                        src={levelObj.src} 
                        alt="" 
                        onClick={onImageClick}
                    />

                    <Dropdown 
                    show = {showDropdown} 
                    levelObjects = {levelObj}
                    location = {clickLoc}
                    />
        
                </OutsideClickHandler>
            </div>

        </div>

    )
    
}

export default Game;