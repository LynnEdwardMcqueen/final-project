
import React from "react";
import HorseCard from "./HorseCard"
import "./Card.css";

function CardContainer({horseList, titleMessage, onClick}) {
    console.log(`in CardContainer ${horseList}`)
    return (
        <>
            <h1>{titleMessage}</h1>
            <div className="card-container">
                {horseList.map(horse => {
                    return <HorseCard key={horse.id} dataIndex = {horse.id} name={horse.name} cardImg={horse.photo_url} onClick = {onClick} />
            })}
            </div>
        </>
    )
    }

export default CardContainer