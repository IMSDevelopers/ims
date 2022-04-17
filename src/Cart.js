import React, { useState } from 'react';
import { useGlobalState } from './state/globalState';
import Navbar from './components/Navbar';
import axios from 'axios';
import { HiOutlineTrash } from 'react-icons/hi';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { placeOrderNotify } from './components/Toastify';

const Cart = () => {

    const [id, setStudentID] = useState(0);
    const [cart, setCart] = useGlobalState('cart');

    const generateOrderID = () => {
        return Math.floor(Math.random() * 10000000);
    }

    const deleteCartItem = (id) => {
        let newCart = [];
        // Add every item except for the one we want to delete to the new cart
        cart.forEach(function(item) {
            if (item != cart.at(id)) {
                newCart.push(item)
            }
        });

        // Update the cart
        setCart(newCart)
    }

    /*
        @TODO: Make this look less ugly!
    */
    const getTime = () => {
        return new Date().toISOString().slice(0, 10).replace('T', ' ');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let random_gen_id = generateOrderID();
        let time_placed = getTime();
        cart.forEach(item => {
            axios.post("http://127.0.0.1:5000/api/postOrder", {
                order_id: random_gen_id,
                item_id: item.item_id,
                num_ordered: item.num_ordered,
                student_id: id,
                time_placed: time_placed
            })
                .then(res => {
                    console.log(res);
                })
                .then(() => setCart([]))
                .catch(err => {
                    console.log(err);
                })
        })

        placeOrderNotify();
    }
    
    return (
        <React.Fragment>
            <Navbar />
            <ToastContainer/>
            <div className="container py-5">
                <h3>Your Cart</h3>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col">

                            <ul className="list-group">
                                {(cart.length > 0) ?
                                    cart.map((item, id) => {
                                        return (
                                            <React.Fragment>
                                                <li className="list-group-item" key={id}>
                                                    <strong>{item.item_name}</strong>
                                                    <p>{item.description}</p>
                                                    Qty: {item.num_ordered}
                                                    <button type="button" className="btn btn-danger m-3" onClick={() => deleteCartItem(id)}>
                                                        <HiOutlineTrash />
                                                    </button>
                                                </li>
                                            </React.Fragment>
                                        )
                                    })
                                    : <div><strong>Your Cart is Empty</strong></div>}
                            </ul>
                        </div>
                    </div>
                    <label htmlFor="studentID">Your Student ID:</label>
                    <input type="number" className="form-control" placeholder="######"
                        onChange={e => setStudentID(e.target.value)} />
                    <button type="submit" className="btn btn-warning m-3">Place Order</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Cart;