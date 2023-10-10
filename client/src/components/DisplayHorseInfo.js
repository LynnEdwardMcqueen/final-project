import React, { useState, useEffect } from "react";
import DisplayFeedingInformation from "./DisplayFeedingInformation";
import DisplayOwnerInformation from "./DisplayOwnerInformation"

function DisplayHorseInfo({horse, index, isAdmin}) {
    const [morningData, setMorningData] = useState({})
    const [eveningData, setEveningData] = useState({})

    useEffect(() => {
        fetch(`/morning/${horse.morning_feed_id}`)
          .then((r) => r.json())
          .then((morningData) => {
            setMorningData(morningData)
          });
        }, []);

    useEffect(() => {
        fetch(`/evening/${horse.evening_feed_id}`)
          .then((r) => r.json())
          .then((eveningData) => {
            setEveningData(eveningData)
          });
        }, []);


    return(
        <div>
            <p>Information for {horse.name}</p>

            <ul>Vet Contact and Care Info
                <li>Vet Name and Number:  {horse.vet_name} {horse.vet_number}</li>
                <li>Care Notes: {horse.care_notes}</li>
            </ul>

            {isAdmin ? (
            <DisplayOwnerInformation horse = {horse} />
            ) : (null)}

            <DisplayFeedingInformation timeOfDay = "Morning" feedData = {morningData} />
            <DisplayFeedingInformation timeOfDay = "Evening" feedData = {eveningData} />


        </div>

    )
}

export default DisplayHorseInfo;