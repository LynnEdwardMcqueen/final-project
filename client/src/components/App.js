import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory} from "react-router-dom";
import Login from "./Login";

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
        <Switch>
          <Route path ="/">
            <h1>Project Client</h1>;
          </Route>
  
          <Route path = "/AddHorse">
            <h1>AddHorse</h1>
          </Route>

          <Route path = "/AddJointOwnership">
            <h1>AddJointOwnership</h1>
          </Route>

          <Route path = "/DeleteHorse">
            <h1>DeleteHorse</h1>
          </Route>

          <Route path = "/MorningSummary">
            <h1>MorningSummary</h1>
          </Route>

          <Route path = "/EveningSummary">
            <h1>EveningSummary</h1>
          </Route>

          <Route path = "/logout">
            <h1>Logout</h1>
          </Route>
            
          <Route path = "/login">
            <Login onLoginComplete = {handleLoginUser} />
          </Route>

        </Switch>
      </div>
    )
  }
}

export default App;
