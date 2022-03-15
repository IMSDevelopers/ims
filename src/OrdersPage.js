import Navbar from "./components/Navbar";
import React from "react";
import { dummyOrders } from './dummyOrders.js';
import Order from './components/Order.js';

function OrdersPage() {
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
            <div>
            <div className="row">
                    {dummyOrders.map(order => {
                        return (
                            <div className="">
                                <div className="mb-4">
                                    <Order studentID={order.studentID} dateTimePlaced={order.dateTimePlaced} items={order.items} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className= "text-center">
            {/* <button
                className="btn btn-warning btn-lg"
                type="button">
                Cancel Order
            </button> */}
            </div>
        </div>
    )
}

export default OrdersPage;
