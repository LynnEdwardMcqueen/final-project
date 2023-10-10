import React, { useState } from "react";
import { useHistory, Redirect} from "react-router-dom";
import AddHorseForm from "./AddHorseForm";
import AddFeedSessionForm from "./AddFeedSessionForm";


// This needs to be declared outside of the AddHorse function so
// that it retains its contents during re-render
let newHorseObject = null

function AddHorse({userId}) {
    const [reRender, setReRender] = useState(0)
 
    function handleFeedSubmit() {
        // This will cause a re-render and guide the conditional rendering.
        // When the evening feed session form is complete, nothing will be
        // rendered!
       

        setReRender(reRender + 1)

    }

    function handleFeedSubmitFinal() {
        console.log("Final Feed submit")
    //    setReRender(reRender + 1)
    
        return(< Redirect to="/" /> )

    }
    

    function handleHorseSubmit(horseObject) {
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
        <AddHorseForm userId = {userId} onSubmit = {handleHorseSubmit} horse = {null}/>
        ) : (null)}

        {reRender == 1  ? (
        <AddFeedSessionForm horseId = {newHorseObject.id} onSubmit = {handleFeedSubmit} title = {"Morning Feed Information"} route = {"morning"} feed = {null} />    
        ) : (null)}

        {reRender == 2  ? (
        <AddFeedSessionForm horseId = {newHorseObject.id} onSubmit = {handleFeedSubmit} title = {"Evening Feed Information"} route =  {"evening"} feed = {null} />    
        ) : (null)}
        
        {reRender === 3 ? (
        < Redirect to="/" />
        ) : (null)}
    </>
    )
}

export default AddHorse;