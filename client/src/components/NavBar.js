// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  fontSize: "13px",
  textAlign: "center",
  color: "white",
};

function NavBar({username}) {
  return (
    <div>
 {/*}     <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
    </NavLink> {*/}
      {username !== "Admin" ? 
      (<NavLink
        to="/AddHorse"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add Horse
      </NavLink>
      ) : (null) }
      
      {username !== "Admin" ? 
      (
      <NavLink
        to="/AddJointOwnership"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add Joint Own.
      </NavLink>
      ) : (null) }

      {username !== "Admin" ? 
      (
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
      ) : (null)}

      {username !== "Admin" ? 
      (
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
      ) : (null) }
      
      {username === "Admin" ? 
      (
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
      
      ) : (null) }
      {username === "Admin" ? 
      (
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
      ) : (null) }



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

      <NavLink
        to="/Logout"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Logout
      </NavLink>
    </div>
  );
}

export default NavBar;