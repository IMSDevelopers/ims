import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { dummy } from './dummy.js';
import { withRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Cart extends React.Component {

    

    redirectToOrders = () => {
        const { history } = this.props;

        const notify = () => toast.success('Item created!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            ;
        
        notify();
       
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
                Place Order
            </button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            </div>
        </div>
    )
    }
}

export default withRouter(Cart);