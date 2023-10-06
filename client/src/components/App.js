import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory} from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {

  const history = useHistory();
  const [user, setLoggedIn] = useState(null)

  function handleLoginUser(user) {
    setLoggedIn(user)
  }

  if (user === null) {
    history.push("/login");
  }

  if (!user) {
    return (
      <div>
        <Login onLoginComplete = {handleLoginUser} />
      </div>
    )
  } else {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path ="/">
            
            <h1>Project Client</h1>;
          </Route>
  
          <Route path = "/AddHorse">
            {console.log("AddHorse")}
            <h1>AddHorse</h1>
          </Route>

          <Route path = "/AddJointOwnership">
            <h1>AddJointOwnership</h1>
          </Route>

          <Route path = "/DeleteHorse">
            <h1>DeleteHorse</h1>
          </Route>

          <Route path = "/EditHorse">
            <h1>EditHorse</h1>
          </Route>

          <Route path = "/EveningSummary">
            <h1>EveningSummary</h1>
          </Route>

          <Route path = "/login">
            <Login onLoginComplete = {handleLoginUser} />
          </Route>

          <Route path = "/logout">
            <h1>Logout</h1>
          </Route>
            
          <Route path = "/MorningSummary">
            <h1>MorningSummary</h1>
          </Route>

          <Route path = "/ViewHorse">
            <h1>ViewHorse</h1>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
