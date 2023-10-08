import React, { useState, useEffect } from "react";

function DisplayHorseInfo({horse, index}) {
    const [morningData, setMorningData] = useState({})
    const [eveningData, setEveningData] = useState({})
    console.log("Here in DisplayHorseInfo")
    console.log(`index = ${index}`)
    console.log(`horse.morning_feed_id = ${horse["morning_feed_id"]}`)
    console.log(`horse.evening_feed_id = ${horse["evening_feed_id"]}`)

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
          .then((morningData) => {
            setEveningData(eveningData)
          });
        }, []);
    return(<p>Made it to DisplayHorseInfo!</p>)
}

export default DisplayHorseInfo;