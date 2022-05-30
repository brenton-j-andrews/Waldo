// Dropdown game menu and target, called on clicking game image.
import React from "react";

import { renderIconsAndNames } from "../../Helpers/helperFunctions";


const Dropdown = ({show, levelObjects, location}) => {

    if (show) {
        return (
            <div className="game-dropdown-menu" style={location}> 
                <div className="dropdown-target-box">
                    
                </div>

                <div className="dropdown-names">
                {
                    renderIconsAndNames(levelObjects, "dropdown")
                }
                </div>
            </div>
        )
    }
    
}

export default Dropdown;