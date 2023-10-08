import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer"
import './Card.css'


function ViewHorse({userId}) {
    const [horseDisplayId, setHorseId] = useState(0)
    const [displayHorses, setDisplayHorses] = useState([])
  

    function handleCardClick(event) {
        console.log(`The horse id clicked is ${event.target.getAttribute("horseIndex")}`)
        console.log(event)
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
        <CardContainer horseList = {displayHorses} titleMessage = "Click on Horse To View Details" onClick = {handleCardClick}  />
    )
}

export default ViewHorse;