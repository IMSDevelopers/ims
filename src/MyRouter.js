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
import OrdersPage from "./OrdersPage";
import Cart from "./Cart";
import AddItem from "./AddItem";

function MyRouter(){
    return(
        <Router>
            <Switch>
                <Route path ="/" exact component={StartPage}/>
                <Route path ="/Login" exact component={Login}/>
                <Route path ="/home" exact component={UserHome}/>
                <Route path = "/orders" exact component ={OrdersPage}/>
                <Route path = "/cart" exact component ={Cart}/>
                <Route path = "/additem" exact component ={AddItem}/>
                <Route path ="*" component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default MyRouter;