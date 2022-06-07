import React, { useState, useEffect  } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import firebase, { firestore } from "../firebase-config";

import Dropdown from "../Components/Game/Dropdown";
import Modal from "../Components/Game/Modal";

import { renderIconsAndNames, checkClickedCoordinates } from "../Helpers/helperFunctions";
import levelObjects from "../Assets/levelObjects";


const IMAGE_HEIGHT = 650;
const IMAGE_WIDTH = 1000;

const Game = (props) => {

    let [showDropdown, setShowDropdown] = useState(false);
    let [coords, setCoords] = useState([0, 0]);
    let [dropLoc, setDropLoc] = useState({ left: "0%", top: "0%"});
    let [gameOver, setGameOver] = useState(false);
    let [startTime, setStartTime] = useState(Date.now());
    let [elapsedTime, setElapsedTime] = useState(null);
    let [username, setUsername] = useState("");

    const levelObject = levelObjects[props.level - 1];

    // If game over, calculate elapsed time.
    useEffect(() => {
        if (gameOver === true) {
            let endTime = Date.now();
            let scoreTime = (endTime - startTime) / 1000;
            setElapsedTime(elapsedTime = scoreTime);
        }
    }, [gameOver]);
    

    // Called on clicking the image, event data parsed in other functions.
    const onImageClick = (e) => {
        setShowDropdown(true);
        fetchCoordinates(e);
    }

    // Fetch and set clicked coordinates from click event.
    const fetchCoordinates = (e) => {
        let x_coord = e.nativeEvent.offsetX;
        let y_coord = e.nativeEvent.offsetY;
        setCoords([x_coord, y_coord]);
        setDropLoc({ left: `${Math.round(( (x_coord - 50) / IMAGE_WIDTH ) * 100)}%`, top: `${Math.round(( (y_coord - 27) / IMAGE_HEIGHT ) * 100)}%` });
    }

    // Check answer after dropdown button click.
    const checkAnswer = (index) => {
        hideDropDown();
        if (checkClickedCoordinates(coords[0], levelObject.char_cooords[index][0])) {
            if (checkClickedCoordinates(coords[1], levelObject.char_cooords[index][1])) {
                levelObject.char_found[index] = true;
                checkGameOver();
            }
        }
    }

    // Check if conditions for game over are met.
    const checkGameOver = () => {
        if (levelObject.char_found.every(value => value === true)) {
            // totalTime = totalPlayTime();
            setGameOver(true);
        }
    }

    // Toggle dropdown menu view boolean.
    const hideDropDown = () => {
        setShowDropdown(false);
    }

    // Update username on modal form:
    const updateUsername = (e) => {
        setUsername(username = e.target.value)
    }

    // Submit score to firebase database.
    const submitScore = async () => {
        const docPath = `level${props.level}`
        const ref = await firestore.collection("game").doc(`level${props.level}`).get();
        console.log(ref);

        const data = {
            name: {username},
            score: {elapsedTime}
        }

        firestore.collection("game").doc(docPath).collection("scores").add(data);
    }

    return (
        <div className="game-wrapper">
            <div className="game-information-banner">
                <p className="game-information-banner-text"> Level {props.level}</p>
                <div className="game-char-icons">
                    { renderIconsAndNames(levelObject, "display")}
                </div>
            
                <button className="game-start-btn"> Click to Start! </button>
                <a href="/home">Return Home</a>
            </div>
            
            <div className="game-field">

                <OutsideClickHandler display="contents" onOutsideClick={() => {hideDropDown()}} >
                    <img 
                        className="game-image" 
                        src={levelObject.src} 
                        alt="" 
                        onClick={onImageClick}
                    />

                    <Dropdown 
                    show = {showDropdown} 
                    levelObject = {levelObject}
                    location = {dropLoc}
                    checkAnswer = {checkAnswer}
                    />

                    <Modal 
                    show = {gameOver}
                    elapsedTime = {elapsedTime}
                    submitScore = {submitScore}
                    username = {username} 
                    updateUsername = {updateUsername}
                    />
        
                </OutsideClickHandler>
            </div>

        </div>

    )
    
}

export default Game;