import React, { useState } from 'react';
import { useGlobalState } from './state/globalState';
import Navbar from './components/Navbar';
import axios from 'axios';

const Cart = () => {

    const [id, setStudentID] = useState("");
    const cart = useGlobalState("cart")[0];

    const generateOrderID = () => {
        return Math.floor(Math.random() * 10000000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let random_gen_id = generateOrderID()
        cart.forEach(item => {
            axios.post("http://127.0.0.1:5000/api/postOrder", {
                order_id: random_gen_id,
                item_id: item.item_id,
                num_ordered: item.num_ordered,
                student_id: id,
                order_status: "pending"
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        })
    }

    return (
        <React.Fragment>
            <Navbar />
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
                                                    <br />
                                                    Num ordered: {item.num_ordered}
                                                </li>
                                            </React.Fragment>
                                        )
                                    })
                                    : <div><strong>Your Cart is Empty</strong></div>}
                            </ul>
                        </div>
                    </div>
                    <label htmlFor="studentID">Your Student ID:</label>
                    <input type="text" className="form-control" placeholder="######"
                        onChange={e => setStudentID(e.target.value)} />
                    <button type="submit" className="btn btn-warning">Place Order</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Cart;