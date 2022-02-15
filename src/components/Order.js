import React from 'react';

const Order = ({ studentID, dateTimePlaced, items}) => {
    return (
        <div className="order">
            <center>
                <div className="card-body">
                    <h4 className="card-title">Student ID: <strong>{studentID}</strong></h4>
                    <p className="card-text">Order placed on: <strong>{dateTimePlaced}</strong></p>
                    <p className="card-text">Items:</p>
                    <div>
                    {items.map(item => {
                        return (
                            <div>
                            <p>{item.name} x {item.quantity}</p>
                            </div>
                        );
                    })}
                    </div>
                    
                    <p><button type="button" className="btn btn-primary">Accept Order</button></p>
                    <p><button type="button" className="btn btn-primary">Remove Order</button></p>
                </div>
            </center>
        </div>
    );
}

export default Order;