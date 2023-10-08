import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer"
import DisplayHorseInfo from "./DisplayHorseInfo"
import './Card.css'

let horseArrayIndex

function ViewHorse({userId}) {
    const [reRender, setReRender] = useState(0)
    const [displayHorses, setDisplayHorses] = useState([])
 
    
  

    function handleCardClick(event) {
        horseArrayIndex = event.target.getAttribute("horseindex")
        console.log(`displayHorses[horseArrayIndex].keys() = ${displayHorses[horseArrayIndex].morning_feed_id}`)

        setReRender(reRender + 1)
   

    }

    useEffect(() => {
        fetch(`/horse/${userId}`)
          .then((r) => r.json())
          .then((horses) => {
            setDisplayHorses(horses)
          });
        }, []);

    console.log("Finishing pre-return stuff")

    return ( 
        <>
            {(reRender == 0) ? (
            <CardContainer horseList = {displayHorses} titleMessage = "Click on Horse To View Details" onClick = {handleCardClick}  />
            ) : (null) }

            {reRender == 1 ? (
            <DisplayHorseInfo horse = {displayHorses[horseArrayIndex]} index = {horseArrayIndex}  />
            ) : (null) }
        </>
    )
}

export default ViewHorse;