import React, { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";


function EveningFeedSummary() {
    const [eveningFeedSummary, setEveningFeedSummary] = useState({})
    const [render, setRender] = useState(0)

    console.log("EveningFeedSummay")
    function handleButtonClick() {

        setRender(render + 1)
     
    }
    useEffect(() => {
     
        fetch(`evening`)
          .then((r) => r.json())
          .then((eveningFeedSummaryData) => {
            setEveningFeedSummary({...eveningFeedSummaryData})
          });
        }, []);
    return(
        <>  
            {render === 0 && eveningFeedSummary != null ? (
             <h1>Evening Feed Summary
                <p>{eveningFeedSummary.alfalfa_flakes} Alfalfa Flakes</p>
                <p>{eveningFeedSummary.grass_hay_flakes} Grass Hay Flakes</p>
                <p>{eveningFeedSummary.grain_pounds} pounds of grain</p>
                <button onClick = {handleButtonClick}>Exit</button>
            </h1>
            ) : (null)}

            {render == 1 ? (
                < Redirect to="/" />
            ): (null) }
        
            
      
        </>
    )
        

}

export default EveningFeedSummary;