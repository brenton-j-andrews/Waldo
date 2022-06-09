import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase-config";

import levelObjects from "../Assets/levelObjects";
import LeaderboardCard from "../Components/Homepage/LeaderboardCard";
import LeaderboardForm from "../Components/Leaderboard/LeaderboardForm";


const Leaderboard = ({ level, setLevel}) => {

    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        const dataPath = `level${level}`;
        const data = [];

        const getLeaderboardData = async () => {
            const collection = await firestore.collection('game').doc(dataPath).collection("scores").get()
            .then(QuerySnapshot => {
                QuerySnapshot.forEach(doc => {
                    let dataSummary = {
                        username: doc.data().name.username,
                        score: doc.data().score.elapsedTime
                    }
                    data.push(dataSummary);
                })
            });

            setLeaderboardData(data);
        } 

        getLeaderboardData();

    }, [level])



    const level_object_cards = levelObjects.map((map) => (
        <LeaderboardCard
            clicked = {() => setLevel(level = map.id)}
            key = {map.id}
            id = {map.id}
            src = {map.src}
            active = {level === map.id}
        />
        )
    )

    return (
        <div className="leaderboard-wrapper">
            <div className="leaderboard-information-banner">
                <p> Leaderboard </p>
                
                <Link className="leaderboard-btn" to={"/game"}> Play </Link>

                <Link className="leaderboard-btn" to={"/home"}> Return </Link>

            </div>
            <div className="leaderboard-cards">
                {level_object_cards}
            </div>

            <LeaderboardForm level={level} leaderboardData={leaderboardData}/>
        </div>
    )

}

export default Leaderboard;