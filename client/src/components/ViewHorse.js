import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer"
import './Card.css'


function ViewHorse({userId}) {
    const [horseDisplayId, setHorseId] = useState(0)
    const [displayHorses, setDisplayHorses] = useState([])
  

    function handleClick(horseId) {
        setHorseId(horseId)
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
        <CardContainer horseList = {displayHorses} onClick = {handleClick} />
    )
}

export default ViewHorse;