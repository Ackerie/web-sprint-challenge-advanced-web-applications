import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#">logout</a>
        </header> 
        {/* <Link to='login/'>Login</Link> */}
    <Switch>
        <PrivateRoute exact path="/colors" component={BubblePage} />
        <Route exact path='/login' component={Login}/>
        <Route path='/'>
          <Redirect to='/login'/>
        </Route>
     </Switch> 
     </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.