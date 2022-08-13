// Dropdown game menu and target, called on clicking game image.
import React from "react";

const Dropdown = ({show, levelObject, location, checkAnswer}) => {

    let names = levelObject.char_names;
    let isFound = levelObject.char_found;

    if (show) {
        return (
            <div className="game-dropdown-menu" style={location}> 
                
                <div className="dropdown-target-box"></div>

                <div className="dropdown-names">

                    {names.map((name, index) => {
                        if (!isFound[index]) {
                            return (
                                <button className="dropdown-btn" key={name} onClick={() => checkAnswer(index)}> {name} </button>
                            )}
                        }
                    )}
                    
                </div>
            </div>
        )
    }    
}

export default Dropdown;