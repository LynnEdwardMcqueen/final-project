import React, { useState, useEffect } from "react";
// import {Redirect} from "react-router-dom";

function AddJointOwnership({userId}) {
    const[othersHorses, setOthersHorses] = useState([])
    console.log("Add joint ownership")

    useEffect(() => {
        fetch(`/otherhorse/${userId}`)
          .then((r) => r.json())
          .then((horses) => {
            setOthersHorses(horses)
          });
        }, []);

    return (
        
    )
}

export default AddJointOwnership