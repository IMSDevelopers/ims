import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion"
import axios from "axios";
import AdminNavbar from "./components/AdminNavbar";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteOrderNotify, approveOrderNotify } from './components/Toastify';
import { useGlobalState } from "./state/globalState";
import { remote } from "./ip"

function OrdersPage() {

    const [orders, setOrders] = useState([]);

    const approveOrder = (items, id) => {
        items.forEach(item => {
            console.log(item);
            axios.put(`http://${remote}/api/updateQuantity/${item.item_id}`, {
                num_ordered: item.num_ordered
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        })
        
        axios.get(`http://${remote}/api/deleteOrder/${id}`)
            .then(res => {
                console.log(res);
            })
            .then(res => {
                axios.get(`http://${remote}/api/getOrders`)
                    .then(res => {
                        setOrders(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => { console.log(err) });

        axios.get(`http://${remote}/api/getOrders`)
            .then(res => {
                setOrders(res.data);
            })
            .catch(err => {
                console.log(err);
        });

        
        approveOrderNotify();
    }

    const deleteOrder = (id) => {
        axios.get(`http://${remote}/api/deleteOrder/${id}`)
            .then(res => {
                console.log(res);
            })
            .then(res => {
                axios.get(`http://${remote}/api/getOrders`)
                    .then(res => {
                        setOrders(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => { console.log(err) });

            deleteOrderNotify();
    }

    useEffect(() => {
        axios.get(`http://${remote}/api/getOrders`)
            .then(res => {
                setOrders(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log('Error:', err)
            })
    }, [])

    // rerender when orders object changes (delete/approve)
    useEffect(() => {
    }, [orders])

    return (
        <div>
            {useGlobalState("userState")[0] === true ? 
            
            <React.Fragment>
                <AdminNavbar />
                <ToastContainer/>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col">
                            {orders.map((order, i) => {
                                return (
                                    <Accordion key={i}>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <strong>Order #:&nbsp;</strong>
                                                {order.order_id}
                                                <span className="badge bg-secondary">Placed by: {order.student_id} at {order.time_placed}</span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-group">
                                                    {order.items.map((item, i) => {
                                                        return (
                                                            <div>
                                                                <li className="list-group-item" id={i}>
                                                                    <img src={item.url_image} className="img-thumbnail float-left" style={{ width: 50, height: 50 }} alt="item img"/>
                                                                    {item.item_name}
                                                                    <p>Num Ordered: {item.num_ordered}</p>
                                                                    <p>Qty: {item.quantity}</p>
                                                                </li>
                                                            </div>
                                                        )
                                                    })}
                                                </ul>
                                                <button type="button" className="btn btn-danger" onClick={() => deleteOrder(order.order_id)}>Delete</button>
                                                <button type="button" className="btn btn-success" onClick={() => approveOrder(order.items, order.order_id) }>Approve</button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                )
                            })}
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </React.Fragment>

            : 

            <React.Fragment>
                <div className="container py-5">
                </div>
                <div className="container py-5">
                </div>
                <div className="container py-5">
                </div>
                <div className="d-flex align-items-center justify-content-center" >
                    <h1>Forbidden</h1>
                </div>
                
            </React.Fragment>
            
            }
            
        </div>
    )
}

export default OrdersPage;
