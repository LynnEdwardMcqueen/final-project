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
    console.log("Going to push login.  Push it real good.")
    history.push("/login");
  }

  if (!user) {
    console.log("Since !user, going to login")
    return (
      <div>
        <Login onLoginComplete = {handleLoginUser} />
      </div>
    )
  } else {
    console.log(`App username = ${user.username}`)
    history.push("/")
    return (
      <div>
        <NavBar username = {user.username} />
        <Switch>
          <Route exact path ="/">
            
            <h1>Project Client</h1>;
          </Route>
  
          <Route exact path = "/AddHorse">
            {console.log("AddHorse")}
            <h1>AddHorse</h1>
          </Route>

          <Route exact path = "/AddJointOwnership">
            <h1>AddJointOwnership</h1>
          </Route>

          <Route exact path = "/DeleteHorse">
            <h1>DeleteHorse</h1>
          </Route>

          <Route exact path = "/EditHorse">
            <h1>EditHorse</h1>
          </Route>

          <Route exact path = "/EveningSummary">
            <h1>EveningSummary</h1>
          </Route>

          <Route exact path = "/login">
            <Login onLoginComplete = {handleLoginUser} />
          </Route>

          <Route exact path = "/logout">
            <h1>Logout</h1>
          </Route>
            
          <Route exact path = "/MorningSummary">
            <h1>MorningSummary</h1>
          </Route>

          <Route exact path = "/ViewHorse">
            <h1>ViewHorse</h1>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
