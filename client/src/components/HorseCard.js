import { Switch, Route, useHistory} from "react-router-dom";
import React, { useState } from "react";
import "./Card.css"

function HorseCard({ dataIndex, cardImg, name, onClick}) {

    return (
      <div className="card center-align" onClick = {onClick} horseindex = {dataIndex} >
        <img className="card-img" src={cardImg} alt={name} horseindex = {dataIndex}/>
        <p className="card-p" horseindex = {dataIndex}>{name}</p>

      </div>
    );
  }
  export default HorseCard;
  