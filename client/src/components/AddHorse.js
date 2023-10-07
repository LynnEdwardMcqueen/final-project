import React, { useEffect, useState } from "react";
import AddHorseForm from "./AddHorseForm";
import AddFeedSessionForm from "./AddFeedSessionForm";

// This needs to be declared outside of the AddHorse function so
// that it retains its contents during re-render
let newHorseObject = null

function AddHorse({userId}) {
    const [reRender, setReRender] = useState(0)
 

    function handleMorningFeedSubmit() {

    }
    function handleHorseSubmit(horseObject) {
        console.log("Here in handleHorseSubmit")
        console.log(`The horse's name is ${horseObject.name}`)
        // Make a copy since the reference goes away at the end of the function.
        newHorseObject = {...horseObject}
        setReRender(reRender + 1)
        console.log(`The new horse's id is ${newHorseObject.id}`)
        
    }

    if (newHorseObject) {
        console.log(`newHorseObject.name = ${newHorseObject.name}`)
    } else {
        console.log(`The value of newHorseObject is ${newHorseObject}`)
    }
    console.log(`Rendering with reRender = ${reRender}`)

    return(
    <>
        {reRender == 0 ? (
        <AddHorseForm userId = {userId} onSubmit = {handleHorseSubmit} />
        ) : (null)}

        {reRender == 1  ? (
        <AddFeedSessionForm horseId = {newHorseObject.id} onSubmit = {handleMorningFeedSubmit} title = {"Morning Feed Information"}/>    
        ) : (null)}
    </>
    )
}

export default AddHorse;