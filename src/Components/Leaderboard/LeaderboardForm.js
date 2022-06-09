import React from "react";

const LeaderboardForm = ({ level, leaderboardData }) => {
    console.log(`Leaderboard level: ${level}`);
    console.log(leaderboardData);
    

    return (
        <div>
            This is the leaderboard for level {level}.

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Time (Seconds) </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            leaderboardData.map((item, i) => (
                                <tr key={i}>
                                    <td> {item.username} </td>
                                    <td>{item.score} </td> 
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default LeaderboardForm;