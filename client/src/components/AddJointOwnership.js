import React, { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import CardContainer from "./CardContainer"
import SaveSharedOwnership from "./SaveSharedOwnership"


let horseArrayIndex
function AddJointOwnership({userId}) {
    const[othersHorses, setOthersHorses] = useState([])
    const[reRender, setReRender] = useState(0)
    const[foo, setFoo] = useState(0)

    console.log("Add joint ownership")


    function handleCardClick(event) {

        horseArrayIndex = event.target.getAttribute("horseindex")
        console.log(`on click horseArrayIndex = ${horseArrayIndex}`)
        let value = {"horse_id" : othersHorses[horseArrayIndex].id  }
        console.log(`value = ${value}`)
        console.log(`value.horse_id = ${value.horse_id}`)
        console.log("SaveSharedOwnership")
        for (let key in value) {
            console.log(`key = ${key} value = ${value[key]}`)
        }

    
        fetch(`otherhorse/${userId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
          })
            .then((r) => r.json())
            .then((newReview) => {
                console.log("Here in fetch")
                setFoo(newReview)
            })
        setReRender(reRender + 1)
    }
    
    console.log(`AddJointOwnership userid = ${userId}`)
    useEffect(() => {
        fetch(`/otherhorse/${userId}`)
          .then((r) => r.json())
          .then((horses) => {
            setOthersHorses(horses)
          });
        }, []);

    return (
        <>
            { (reRender == 0) ? (
                <CardContainer horseList = {othersHorses} titleMessage = "Click on Horse You Co-Own" onClick = {handleCardClick}  />
                ) : (null) }


            { (reRender == 1) ? (
            <>                
                < Redirect to="/" />
            </>
            ) : (null) }
           
        </>
    )
}

export default AddJointOwnership