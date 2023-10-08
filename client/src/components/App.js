import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory} from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import AddHorse from "./AddHorse"
import ViewHorse from "./ViewHorse"
import AddJointOwnership from "./AddJointOwnership"

function App() {

  const history = useHistory();
  const [user, setLoggedIn] = useState(null)

  function handleLoginUser(user) {
    setLoggedIn(user)
    history.push("/")
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
    
    return (
      <div>
        <NavBar username = {user.username} />
        <Switch>
 
          <Route exact path = "/AddHorse">
            <AddHorse userId = {user.id} />
          </Route>

          <Route exact path = "/AddJointOwnership">
            <AddJointOwnership userId = {user.id} />
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
            <h1><ViewHorse userId = {user.id} /></h1>
          </Route>

          <Route path ="/">
            <h1>Project Client</h1>;
          </Route>
 
        </Switch>
      </div>
    )
  }
}

export default App;
