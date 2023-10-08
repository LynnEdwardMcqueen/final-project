import { Switch, Route, useHistory} from "react-router-dom";
import React, { useState } from "react";
import "./Card.css"

function HorseCard({ dataIndex, cardImg, name, onClick}) {
    console.log(`in HorseCard dataIndex = ${dataIndex}`)
    return (
      <div className="card center-align" onClick = {onClick} horseIndex = {dataIndex} >
        <img className="card-img" src={cardImg} alt={name} horseIndex = {dataIndex}/>
        <h1 className="card-h1" horseIndex = {dataIndex}>{name}</h1>

      </div>
    );
  }
  export default HorseCard;
  