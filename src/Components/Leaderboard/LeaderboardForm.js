import React from "react";

const LeaderboardForm = ({ level, leaderboardData }) => {

    return (
        <div className="table-container">
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th className="table-col"> Place </th>
                        <th className="table-col"> Name </th>
                        <th className="table-col"> Time (Seconds) </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        leaderboardData.map((item, i) => (
                            <tr key={i}>
                                <td> {i + 1} </td>
                                <td> {item.username} </td>
                                <td>{item.score} </td> 
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>   
    )
}

export default LeaderboardForm;