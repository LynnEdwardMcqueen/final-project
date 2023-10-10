import React, { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";


function MorningFeedSummary() {
    const [morningFeedSummary, setMorningFeedSummary] = useState({})
    const [render, setRender] = useState(0)

    console.log("In MorningFeedSummary")
    function handleButtonClick() {
        console.log("Button Click")
        setRender(render + 1)
     
    }
    useEffect(() => {

        fetch(`morning`)
          .then((r) => r.json())
          .then((morningFeedSummaryData) => {
            setMorningFeedSummary({...morningFeedSummaryData})
          });
        }, []);
        return(
        <>  
            {render === 0 && morningFeedSummary != null ? (
             <h1>Morning Feed Summary
                <p>{morningFeedSummary.alfalfa_flakes} Alfalfa Flakes</p>
                <p>{morningFeedSummary.grass_hay_flakes} Grass Hay Flakes</p>
                <p>{morningFeedSummary.grain_pounds} pounds of grain</p>
                <button onClick = {handleButtonClick}>Exit</button>
            </h1>
            ) : (null)}

            {render == 1 ? (
                < Redirect to="/" />
            ): (null) }
        
            
      
        </>
    )
        

}

export default MorningFeedSummary;