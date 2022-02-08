import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import StartPage from "./StartPage";
import Login from "./Login";
import UserHome from "./UserHome";
import NotFound from "./NotFound";
import Orders from "./Orders";
import Cart from "./Cart";

function MyRouter(){
    return(
        <Router>
            <Switch>
                <Route path ="/" exact component={StartPage}/>
                <Route path ="/Login" exact component={Login}/>
                <Route path ="/home" exact component={UserHome}/>
                <Route path = "/orders" exact component ={Orders}/>
                <Route path = "/cart" exact component ={Cart}/>
                <Route path ="*" component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default MyRouter;