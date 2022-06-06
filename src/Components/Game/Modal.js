import React from "react";

import "../../Styles/Modal.css";

const Modal = (props) => {

    if (props.show) {

        return (
            <div className="game-modal">
                <h3 className="modal"> You Finished In: </h3>
                <p> {props.elapsedTime} Seconds! </p>

                <div className="modal-submit-form">
                   
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        value={props.username}
                        maxLength="25"
                        onChange={props.updateUsername}
                    />

                    <button onClick={props.submitScore} link={"leaderboard"}> Submit Score </button>

                </div>

                <div className="modal-btns">
                    <a href="/home">Return Home</a>
                    <a href="/home">Submit</a>
                </div>
            </div>
        )
    }
    
}

export default Modal;