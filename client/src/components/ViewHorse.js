import React, { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import CardContainer from "./CardContainer"
import DisplayHorseInfo from "./DisplayHorseInfo"
import './Card.css'

let horseArrayIndex

function ViewHorse({userId, isAdmin}) {
    const [reRender, setReRender] = useState(0)
    const [displayHorses, setDisplayHorses] = useState([])
 
    function handleExitClick() {
        setReRender(reRender + 1)
    }
  

    function handleCardClick(event) {
        horseArrayIndex = event.target.getAttribute("horseindex")
        setReRender(reRender + 1)
    }

    let useEffectPath = isAdmin ? '/horses' : `/horse/${userId}`


    useEffect(() => {
        fetch(useEffectPath)
          .then((r) => r.json())
          .then((horses) => {
            setDisplayHorses(horses)
          });
        }, []);


    return ( 
        <>
            {(reRender === 0) ? (
            <CardContainer horseList = {displayHorses} titleMessage = "Click on Horse To View" onClick = {handleCardClick}  />
            ) : (null) }

            {reRender === 1 ? (
            <>    
            <DisplayHorseInfo horse = {displayHorses[horseArrayIndex]} index = {horseArrayIndex} isAdmin = {isAdmin} />
            <button onClick = {handleExitClick}>Click to Exit</button>
            </>
            ) : (null) }

            {reRender === 2 ? (
            < Redirect to="/" />
            ): (null) }
        </>
    )
}

export default ViewHorse;