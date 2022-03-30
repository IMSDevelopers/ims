import React from 'react';
import '../styles/App.css'

const AdminNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-cbu">
            <div className="container-fluid ">
                <button className="navbar-brand white-word" id="linkHome">Inventory Management System</button>
            </div>
            <button className="btn btn-warning me-3 text-nowrap" onClick={() => console.log('add item')}>Add Item</button>
            <button className="btn btn-warning me-3 text-nowrap">Orders</button>
        </nav>
    );
};

export default AdminNavbar;