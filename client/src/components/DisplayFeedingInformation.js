import React from "react";

function DisplayFeedingInformation({timeOfDay, feedData}) {
    return(
        <ul>{timeOfDay} Feed
            <li>{feedData.alfalfa_flakes} alfalfa flakes</li>
            <li>{feedData.grass_hay_flakes} grass hay flakes</li>
            {feedData.grain_pounds ? (
            <li>{feedData.grain_pounds} pounds of {feedData.grain_type}</li>
            ) : (null)}
            <li>Feed Notes: {feedData.feed_notes}</li>
        </ul>
    )
}

export default DisplayFeedingInformation;