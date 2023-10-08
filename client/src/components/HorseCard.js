import { Switch, Route, useHistory} from "react-router-dom";
import React, { useState } from "react";

function HorseCard({ cardImg, name}) {
    return (
      <div className="card center-align">
        <img className="card-img" src={cardImg} alt={name} />
        <h1 className="card-h1">{name}</h1>

      </div>
    );
  }
  export default HorseCard;
  