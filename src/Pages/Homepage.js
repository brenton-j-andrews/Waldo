import React from "react";
import { Link } from "react-router-dom";

import levelObjects from "../Assets/levelObjects";
import DisplayCard from "../Components/Homepage/DisplayCard";

const Homepage = ( props ) => {

    const level_object_cards = levelObjects.map((level) => (
        
        <Link to="/game" key = {level.id} style={{ textDecoration: 'none'}}> 

            <DisplayCard
                clicked={() => {props.setLevel(level.id)}}
                id = {level.id}
                src = {level.src}
                difficulty = {level.difficulty}
                src-alt ={level.map}
                char_names = {level.char_names}
                char_icons = {level.char_icons}
            />
            
        </Link>
        
    ))

    return (
        <div className="homepage-wrapper">

            <div className="information-banner">
                <p> Click on a level to begin! </p>
            </div>

            <div className="level-select-wrapper">
                <div className="level-select-grid">
                    {level_object_cards}
                </div>
            </div>
            
            <div className="leaderboard-banner">
                <a href="./leaderboard" className="leaderboard-link"> Leaderboard </a>
            </div>
        </div>
    )
}

export default Homepage;
