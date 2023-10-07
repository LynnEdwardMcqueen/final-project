import React, { useEffect, useState } from "react";
import AddHorseForm from "./AddHorseForm"

function AddHorse({userId}) {
    console.log("AddHorse")
    return(
    <>
        <AddHorseForm userId = {userId} />
    </>
    )
}

export default AddHorse;