import Navbar from "./components/Navbar";
import React from "react";

function Orders() {
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row g-3" style={{ paddingTop: "20px" }}>
                    <div className="col-md-8">
                        <h1>Orders</h1>
                    </div>
                </div>
            </div>
            <div className= "text-center">
            <button
                className="btn btn-warning btn-lg"
                type="button"
                >
                Cancel Order
            </button>
            </div>
        </div>
    )
}

export default Orders;
