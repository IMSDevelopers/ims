import React from 'react';
import '../styles/App.css'
import { withRouter } from 'react-router-dom';
import { setGlobalState } from "../state/globalState";

let pageState = "";

const AdminNavbar = ({ history }) => {

    const redirectToOrders = () => {
        if(history) history.push('/orders');
        pageState = "orders";
    }

    const redirectToHome = () => {
        // If we are redirecting to the admin homepage, we set userState to 'true'
        setGlobalState("userState", true);
        if(history) history.push('/');
        pageState = "home";
    }

    const redirectToGenericHome = () => {
        // If we are redirecting to the user homepage, we set userState to 'false'
        setGlobalState("userState", false);
        if(history) history.push('/');
        pageState = "home";
    }

    if (pageState === "orders") {
        return (
            <nav className="navbar navbar-expand-lg navbar-cbu">
                <div className="container-fluid ">
                    <button className="navbar-brand white-word" id="linkHome" onClick={() => redirectToHome(true)}>Inventory Management System</button>
                </div>
                <button className="btn btn-warning me-3 text-nowrap" onClick={() =>  redirectToHome()}>Home</button>
                <button className="btn btn-warning me-3 text-nowrap" onClick={() =>  redirectToGenericHome()}>Sign Out</button>
            </nav>
        );
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-cbu">
                <div className="container-fluid ">
                    <button className="navbar-brand white-word" id="linkHome" onClick={() => redirectToHome(true)}>Inventory Management System</button>
                </div>
                <button className="btn btn-warning me-3 text-nowrap" onClick={() =>  redirectToOrders()}>Orders</button>
                <button className="btn btn-warning me-3 text-nowrap" onClick={() =>  redirectToGenericHome()}>Sign Out</button>
            </nav>
        );
    }
};

export default withRouter(AdminNavbar);