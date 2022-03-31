import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import OrdersPage from "./OrdersPage";
import Cart from "./Cart";
import AddItem from "./AddItem";

function MyRouter(){
    return(
        <Router>
            <Switch>
                <Route path ="/" exact component={Home}/>
                <Route path = "/orders" exact component ={OrdersPage}/>
                <Route path = "/cart" exact component ={Cart}/>
                <Route path = "/additem" exact component ={AddItem}/>
                <Route path ="*" component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default MyRouter;