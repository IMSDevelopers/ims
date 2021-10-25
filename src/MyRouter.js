import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import UserHome from "./UserHome";
import NotFound from "./NotFound";
import Orders from "./Orders";
import Cart from "./Cart";

function MyRouter(){
    return(
        <Router>
            <Switch>
                <Route path ="/" exact component={Login}/>
                <Route path ="/signup" exact component={Signup}/>
                <Route path ="/home" exact component={UserHome}/>
                <Route path = "/orders" exact component ={Orders}/>
                <Route path = "/cart" exact component ={Cart}/>
                <Route path ="*" component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default MyRouter;