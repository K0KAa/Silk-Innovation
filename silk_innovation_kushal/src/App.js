import React from "react"
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'
import {Switch, Route} from "react-router-dom"
import { connect } from "react-redux"

function App() {
  const [user, setUser ] = React.useState(false)
  // if(window.localStorage.getItem("Token")) {
  //   setUser(true)
  // }
  // else{
  //   setUser(false)
  // }

  return (
      <Switch>
          <Route exact path= "/">
              <Dashboard />
          </Route>
          <Route  path= "/login">
              {user ? <Dashboard /> : <Login />}
          </Route>
      </Switch>
  );
}

const mapStateToProps = state =>{
  const {userState} = state
  const { newUser } = userState
  return {
      newUser: newUser
  }
}

export default connect(mapStateToProps, null)(App)
