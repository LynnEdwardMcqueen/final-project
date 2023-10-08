import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory} from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import AddHorse from "./AddHorse"

function ViewHorse({userId}) {
    useEffect(() => {
        fetch(`/horse/${userId}`)
          .then((r) => r.json())
          .then((horses) => {
            console.log(horses)
          });
      }, []);
    return ( <h1>SURRENDER DOROTHY!</h1>)
}

export default ViewHorse;