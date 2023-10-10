import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory} from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import AddHorse from "./AddHorse"
import ViewHorse from "./ViewHorse"
import AddJointOwnership from "./AddJointOwnership"
import DeleteHorse from "./DeleteHorse"
import EditHorse from "./EditHorse"
import EveningFeedSummary from "./EveningFeedSummary"
import Logout from "./Logout"
import MorningFeedSummary from "./MorningFeedSummary"

function App() {

  const history = useHistory();
  const [user, setLoggedIn] = useState(null)

  function handleLoginUser(user) {
    setLoggedIn(user)
    history.push("/")
  }

  function handleLogoutUser(user) {
    setLoggedIn(null)
    history.push("/")
  }

  if (user === null) {
    // Go directly to login if no user!
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
        <NavBar username = {user.username} />
        <Switch>
 
          <Route exact path = "/AddHorse">
            <AddHorse userId = {user.id} />
          </Route>

          <Route exact path = "/AddJointOwnership">
            <AddJointOwnership userId = {user.id} />
          </Route>

          <Route exact path = "/DeleteHorse">
            <DeleteHorse userId = {user.id}/>
          </Route>

          <Route exact path = "/EditHorse">
            <EditHorse userId = {user.id} />
          </Route>

          <Route exact path = "/EveningSummary">
            <EveningFeedSummary />
          </Route>

          <Route exact path = "/login">
            <Login onLoginComplete = {handleLoginUser} />
          </Route>

          <Route exact path = "/logout">
            <Logout user = {user} handleLogoutUser = {handleLogoutUser} />
          </Route>
            
          <Route exact path = "/MorningSummary">
            <MorningFeedSummary />
          </Route>

          <Route exact path = "/ViewHorse" >
            <h1><ViewHorse userId = {user.id} isAdmin = {user.username === "Admin"} /></h1>
          </Route>

          <Route path ="/">
            <h1></h1>
          </Route>
 
        </Switch>
      </div>
    )
  }
}

export default App;
