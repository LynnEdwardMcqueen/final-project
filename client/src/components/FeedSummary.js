import React, { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";

function FeedSummary({timeOfDay, title}) {
    const [feedSummary, setFeedSummary] = useState({})

    console.log("Re-render")
    function handleButtonClick() {
        console.log("Button Click")
        setFeedSummary(null)

    }
    useEffect(() => {
        fetch(`/${timeOfDay}`)
          .then((r) => r.json())
          .then((feedSummaryData) => {
            console.log("feedSummaryData = ", feedSummaryData)
            setFeedSummary({...feedSummaryData})
            console.log("feedSummaryData = ",feedSummaryData)
          });
        }, []);
    return(
        <>
            { (feedSummary != null) ? (
            <h1>{title}
                <p>{feedSummary.alfalfa_flakes} Alfalfa Flakes</p>
                <p>{feedSummary.grass_hay_flakes} Grass Hay Flakes</p>
                <p>{feedSummary.grain_pounds} pounds of grain</p>
                <button onClick = {handleButtonClick}>Exit</button>
            </h1>
            ) : (
            < Redirect to="/" />    
            ) }

            
        </>
        
    )
}

export default FeedSummary;