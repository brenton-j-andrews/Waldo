import React from "react";

// Helper functions

// function for rendering icons and names from levelObject array. 2nd arg indicates what to return.
export function renderIconsAndNames(props, arg) {

    
    const icons = Object.values(props.char_icons);
    const names = Object.values(props.char_names);


    // Render just icons
    if (arg === "icons") {
        return (
            <div className="display-card-char-icons" >
                { icons.map( icon => <img className="char-icon" src = {icon} alt="" key={icon}></img> )}
            </div>
        )
    }

    
    // Render both for display bar.
    else if (arg === "display") {
        return (

            icons.map(( icon, index) => 
                <div className="char-icon-name">
                    <img className="char-icon" src= {icon} alt="" key={icon}></img>
                    <p className="char-name"> {names[index]}</p>
                </div>
            )
        )
    }
}


// function for comparing clicked coordinates and answer coordinates. +/- 25 pixels for x and y axis.
export function checkClickedCoordinates(input_Coord, answer_coord) {
    if (input_Coord >= (answer_coord - 25) && input_Coord <= (answer_coord + 25)) {
        return true;
    } return false;
}