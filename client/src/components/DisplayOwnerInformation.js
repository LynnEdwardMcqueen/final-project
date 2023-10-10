import React, { useState, useEffect } from "react";
import DisplayFeedingInformation from "./DisplayFeedingInformation";

function DisplayOwnerInformation({horse}) {
    const[owners, setOwners] = useState([])

    useEffect(() => {
        fetch(`/users/${horse.id}`)
            .then((r) => r.json())
            .then((ownersData) => {
        setOwners(ownersData)
      });
    }, []);

    let ownerList = owners.map((owner) => {
        return(
        <ul key = {owner.id}>Owner Contact Info
            <li key = {owner.id + 1}>{owner.first_name} {owner.last_name}</li>
            <li key = {owner.id + 2}>Phone Number: {owner.phone}</li> 
            <li key = {owner.id + 3}>Email: {owner.email}</li>
        </ul>
        )
    })

    return (
        <div>
            {ownerList}        
        </div>

    )
}

export default DisplayOwnerInformation;
