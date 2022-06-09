import React from "react"

const LeaderboardCard = (props) => {

    if (props.active) {
        return (
            <div className="leaderboard-display-card active" onClick={props.clicked}> 
                <p className="level-text"> Level {props.id} </p>
                <img className="leaderboard-mini-map" src={props.src} alt="level"></img>
            </div>
        )
    }

    else {
        return (
            <div className="leaderboard-display-card" onClick={props.clicked}> 
                <p className="level-text"> Level {props.id} </p>
                <img className="leaderboard-mini-map" src={props.src} alt="level"></img>
            </div>
        )
    }
    
}

export default LeaderboardCard;