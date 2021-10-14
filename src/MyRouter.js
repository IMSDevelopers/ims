import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import Login from "./Login";
import Home from "./Home";
import NotFound from "./NotFound";

function MyRouter(){
    return(
        <Router>
            <Switch>
                <Route path ="/" exact component={Login}/>
                <Route path ="/adminlogin" exact component={AdminLogin}/>
                <Route path ="/home" exact component={Home}/>
                <Route path ="*" component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default MyRouter;