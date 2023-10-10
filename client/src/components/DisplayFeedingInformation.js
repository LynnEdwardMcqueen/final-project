import React from "react";
import "./Display.css"

function DisplayFeedingInformation({timeOfDay, feedData}) {
    return(
        <ul>{timeOfDay} Feed
            <li className = "list-display">{feedData.alfalfa_flakes} alfalfa flakes</li>
            <li className = "list-display">{feedData.grass_hay_flakes} grass hay flakes</li>
            {feedData.grain_pounds ? (
            <li className = "list-display">{feedData.grain_pounds} pounds of grain</li>
            ) : (null)}
            <li className = "list-display">Feed Notes: {feedData.feed_notes}</li>
        </ul>
    )
}

export default DisplayFeedingInformation;