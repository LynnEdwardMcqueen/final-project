
import React from "react";
import HorseCard from "./HorseCard"

function CardContainer({horseList, onClick}) {
    console.log(`in CardContainer ${horseList}`)
    return (
    <div className="card-container">
        {horseList.map(horse => {
            return <HorseCard key={horse.id} name={horse.name} cardImg={horse.photo_url} />
        })}
    </div>
    )

}

export default CardContainer