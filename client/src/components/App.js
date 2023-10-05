import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

function App() {

  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false)
  console.log("App Initialization")
  function handleLoginComplete(loginComplete) {
    if (loginComplete) {
      setLoggedIn(true)
    }
  }

  console.log("Checking logged in")
  console.log(`loggedIn = ${loggedIn}`)
  if (loggedIn === false) {
    console.log("pushing...pushing real good")
    history.push("/login");
  }
  console.log("Exiting logged in")
  if (!loggedIn) {
    return (
      <div>
        <Login onLoginComplete = {handleLoginComplete} />
      </div>
    )
  } else {
    return (
      <div>
        <Switch>
          <Route path ="/">
            <h1>Project Client</h1>;
          </Route>
  
          <Route path = "/login">
            <Login onLoginComplete = {handleLoginComplete} />
          </Route>

          <Route path = "/signup">
            <Signup onLoginComplete = {handleLoginComplete} />
          </Route>

        </Switch>
      </div>
    )
  }
}

export default App;
