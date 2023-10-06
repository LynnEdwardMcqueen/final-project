// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/AddHorse"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add Horse
      </NavLink>
      
      <NavLink
        to="/AddJointOwnership"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add Joint Ownership
      </NavLink>

      <NavLink
        to="/DeleteHorse"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Delete Horse
      </NavLink>

      <NavLink
        to="/EditHorse"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Edit Horse
      </NavLink>

      <NavLink
        to="/EditHorse"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Edit Horse
      </NavLink>
      
      <NavLink
        to="/EveningSummary"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Evening Summary
      </NavLink>

      <NavLink
        to="/MorningSummary"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Morning Summary
      </NavLink>

      <NavLink
        to="/ViewHorse"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        View Horse
      </NavLink>
    </div>
  );
}

export default NavBar;