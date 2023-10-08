
import React from "react";
import HorseCard from "./HorseCard"
import "./Card.css";

function CardContainer({horseList, titleMessage, onClick}) {
    console.log(`in CardContainer ${horseList}`)
    return (
        <>
            <p className = "container-title" > {titleMessage}</p>
            <div className="card-container">
                {horseList.map(horse => {
                    return <HorseCard key={horse.id} dataIndex = {horse.id} name={horse.name} cardImg={horse.photo_url} onClick = {onClick} />
            })}
            </div>
        </>
    )
    }

export default CardContainer