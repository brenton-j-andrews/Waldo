import React from "react";
import { useNavigate } from "react-router-dom";

import "../../Styles/Modal.css";

const Modal = (props) => {
    const navigate = useNavigate();

    const onBtnClick = () => {
        props.submitScore();
        navigate("/leaderboard");
    }

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
                        required
                    />

                    <button onClick={onBtnClick} link={"leaderboard"}> Submit Score </button>

                </div>

                <div className="modal-btns">
                    <a href="/home">Return Home</a>
                </div>
            </div>
        )
    }
    
}

export default Modal;