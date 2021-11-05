import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
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
                                        <Card description={item.description} quantity={item.quantity} url={item.url} />
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
                onClick={() => { this.redirectToOrders() }}>
                Checkout
            </button>
            </div>
        </div>
    )
    }
}

export default withRouter(Cart);