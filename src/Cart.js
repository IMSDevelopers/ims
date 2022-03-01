import React from "react";
import Navbar from "./components/Navbar";
import CheckoutCard from "./components/CheckoutCard";
import { dummy } from './dummy.js';
import { withRouter } from 'react-router-dom';

class Cart extends React.Component {

    redirectToOrders = () => {
        const { history } = this.props;
        if(history) history.push('/orders');
    }

    render() {
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row g-3" style={{ paddingTop: "20px" }}>
                    <div className="col-md-8">
                        <h1>Your Cart</h1>
                    </div>
                    <div className="row">
                        {dummy.map(item => {
                            return (
                                <div className="col-md-2 align-self">
                                    <div className="mb-4">
                                        <CheckoutCard description={item.description} quantity={item.quantity} url={item.url} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className= "text-center">
            <button
                className="btn btn-warning btn-lg"
                type="button"
                onClick={() => { 
                    var studentID = prompt('Please Enter your student ID: ');
                    let sID = new RegExp("^[0-9]{6}");
                    if (studentID.length <= 0 || studentID.length > 6 || !(studentID.match(sID))) {
                        alert("Invalid student ID.");
                    } else {
                        this.redirectToOrders();
                    }
                }}>
                Place Order
            </button>
            </div>
        </div>
    )
    }
}

export default withRouter(Cart);