import React, { useState } from 'react';
import '../styles/App.css'

const CheckoutCard = ({ description, quantity, url }) => {

    const [number, setNumber] = useState(1);

    function confirmDelete() {
        window.confirm('Are you sure you want to delete this item?')
    }

    return (
        <div className="card">
            <button type="button" onClick={confirmDelete} className="close" aria-label="Close" style={{backgroundColor:"#d9534f",color:"white"}} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete" data-toggle="modal" data-target="#exampleModal">
                <span aria-hidden="true">&times;</span>
            </button>

            <img src={url} className="card-img-top" alt="URL to img would go here" />
            <center>
                <div className="card-body">
                <h4 className="card-title">{description}</h4>
                <p className="card-text">Quantity available: <strong>{quantity}</strong></p>
                <p className="card-text">
                    Desired quantity: 
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={e => number <= 1 ? '' : setNumber(number-1)}>-</button>
                        <input pattern="[0-9]+" className="form-control" id="numberSelection" value={number} defaultValue={1} min="1" max={quantity} required disabled/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={e => number >= quantity ? '' : setNumber(number+1)}>+</button>
                    </div>
                </p>

            </div>
            </center>
        </div>
    );
}

export default CheckoutCard;