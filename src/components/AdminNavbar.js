import React from 'react';
import '../styles/App.css'
import { withRouter } from 'react-router-dom';

const AdminNavbar = ({ showAddModal, history }) => {

    const redirectToOrders = () => {
        if(history) history.push('/orders');
    }

    const redirectToHome = () => {
        if(history) history.push('/');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-cbu">
            <div className="container-fluid ">
                <button className="navbar-brand white-word" id="linkHome" onClick={() => redirectToHome(true)}>Inventory Management System</button>
            </div>
            <button className="btn btn-warning me-3 text-nowrap" onClick={() =>  redirectToOrders()}>Orders</button>
        </nav>
    );
};

export default withRouter(AdminNavbar);