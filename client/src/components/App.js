import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory} from "react-router-dom";
import Login from "./Login";

function App() {

  const history = useHistory();
  const [user, setLoggedIn] = useState(null)



  console.log(`user = ${user}`)
  if (user === null) {
    console.log("pushing...pushing real good")
    history.push("/login");
  }
  console.log("Exiting logged in")
  if (!user) {
    return (
      <div>
        <Login onLoginComplete = {setLoggedIn} />
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
            <Login onLoginComplete = {setLoggedIn} />
          </Route>

        </Switch>
      </div>
    )
  }
}

export default App;
