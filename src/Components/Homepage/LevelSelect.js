import React from "react";

import LevelCard from  "./LevelCard";
import levelObjects from "../../Assets/levelObjects.js";

const LevelSelect = (props) => {

    const level_object_cards = levelObjects.map((level) => (
        <LevelCard
        id = {level.id}
        src= {level.src}
        src-alt={level.map}
        />
    ))

    return (
        <div className="level-select-wrapper">
            <div className="level-select-grid">
                {level_object_cards}
            </div>
        </div>
    )
}

export default LevelSelect;