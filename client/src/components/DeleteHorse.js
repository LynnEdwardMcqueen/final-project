import React, { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import CardContainer from "./CardContainer"
import DisplayHorseInfo from "./DisplayHorseInfo"
import './Card.css'

let horseArrayIndex

function DeleteHorse({userId}) {
    const [reRender, setReRender] = useState(0)
    const [displayHorses, setDisplayHorses] = useState([])
 
    function handleExitClick() {
        setReRender(reRender + 1)
    }
  

    function handleCardClick(event) {
        horseArrayIndex =  event.target.getAttribute("horseindex")
        setReRender(reRender + 1)
        let horse_id = displayHorses[horseArrayIndex].id

        let itemData = {"horse_id" : horse_id}


        fetch( `horse/${userId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
        })
            .then((r) => r.json())
            .then((newItem) =>  console.log(newItem));
        
    }

    useEffect(() => {
        fetch(`/horse/${userId}`)
          .then((r) => r.json())
          .then((horses) => {
            setDisplayHorses(horses)
          });
        }, []);


    return ( 
        <>
            {(reRender === 0) ? (
            <CardContainer horseList = {displayHorses} titleMessage = "Click on Horse To Delete" onClick = {handleCardClick}  />
            ) : (null) }
       

            {reRender === 1 ? (
            < Redirect to="/" />
            ): (null) }
        </>
    )
}

export default DeleteHorse;