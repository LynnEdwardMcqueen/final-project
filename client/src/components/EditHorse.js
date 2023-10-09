import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer"
import AddHorseForm from "./AddHorseForm";
import AddFeedSessionForm from "./AddFeedSessionForm";


let horseArrayIndex
// This needs to be declared outside of the AddHorse function so
// that it retains its contents during re-render
let newHorseObject = null

function EditHorse({userId}) {
    const [reRender, setReRender] = useState(0)
    // This is for the horse selection front end
    const [displayHorses, setDisplayHorses] = useState([])
    // This is for the edited version of the selected horse
    const [horse, setHorse] = useState({})


    const [morningData, setMorningData] = useState({})
    const [eveningData, setEveningData] = useState({})   

    function handleFeedSubmit() {
        // This will cause a re-render and guide the conditional rendering.
        // When the evening feed session form is complete, nothing will be
        // rendered!
        setReRender(reRender + 1)
    }

    function handleHorseSubmit(horseObject) {
        // Make a copy since the reference goes away at the end of the function.
        newHorseObject = {...horseObject}
        setHorse(horseObject)
        setReRender(reRender + 1)
    } 

    function handleCardClick(event) {
        horseArrayIndex = event.target.getAttribute("horseindex")
        console.log(`the horse is ${displayHorses[horseArrayIndex].name}`)
        newHorseObject = {...displayHorses[horseArrayIndex]}
        setHorse(displayHorses[horseArrayIndex])
        setReRender(reRender + 1 )

        console.log(`horse = ${newHorseObject}`)
        console.log(`horse.name = ${newHorseObject.name}`)
        // Now we need to read in the feed structures
        fetch(`/morning/${newHorseObject.morning_feed_id}`)
            .then((r) => r.json())
            .then((morningDat) => {
               setMorningData(morningDat)
            });
           
        fetch(`/evening/${newHorseObject.evening_feed_id}`)
            .then((r) => r.json())
            .then((eveningDat) => {
                setEveningData(eveningDat)
            });

    
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
            <CardContainer horseList = {displayHorses} titleMessage = "Click on Horse To Edit" onClick = {handleCardClick}  />
            ) : (null) }

            {reRender === 1 ? (
            <AddHorseForm userId = {userId} onSubmit = {handleHorseSubmit} horse = {displayHorses[horseArrayIndex]} />
            ) : (null) }

            {reRender === 2 ? (
            <AddFeedSessionForm horseId = {newHorseObject.id} onSubmit = {handleFeedSubmit} title = {"Morning Feed Information"} route = {"morning"} feed = {morningData} />
            ) : (null) }

            {reRender === 3 ? (
                <AddFeedSessionForm horseId = {newHorseObject.id} onSubmit = {handleFeedSubmit} title = {"Evening Feed Information"} route =  {"evening"} feed = {eveningData} />  
            ) : (null) }




        </>
    )
}

export default EditHorse;