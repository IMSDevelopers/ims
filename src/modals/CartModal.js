import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartModal = ({
    showCartModal,
    cart
}) => {
    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }

    useEffect(() => {

    }, [cart])

    const [id, setStudentID] = useState("");

    const generateOrderID = () => {
        return Math.floor(Math.random() * 10000000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        cart.forEach(item => {
            let random_gen_id = generateOrderID()
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
            .then(() => showCartModal(false))
            .then(cart = []) // clear cart
            .then(console.log)
            .catch(err => {
                console.log(err);
            })
        })
    }

    return (
        <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Your Cart</h5>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
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
                                                <label htmlFor="studentID">Your Student ID:</label>
                                                <input type="text" className="form-control" placeholder="######"
                                                    onChange={e => setStudentID(e.target.value)} />
                                            </React.Fragment>
                                        )
                                    })
                                    : <div><strong>Your Cart is Empty</strong></div>}
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => showCartModal(false)}>Close</button>
                            <button type="submit" className="btn btn-primary">Place Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CartModal;