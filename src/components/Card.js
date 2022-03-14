import React, { useState } from 'react';
import '../styles/App.css'

const Card = ({ name, description, quantity }) => {

    const [number, setNumber] = useState(0);

    return (
        <div className="card">
            <center>
                <div className="card-body">
                <h2>{name}</h2>
                <h4 className="card-title">{description}</h4>
                <p className="card-text">Quantity available: <strong>{quantity}</strong></p>
                <div className="card-text">
                    Desired quantity: 
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={e => number <= 1 ? '' : setNumber(number-1)}>-</button>
                        <input pattern="[0-9]+" className="form-control" id="numberSelection" value={number} min="1" max={quantity} required disabled/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={e => number >= quantity ? '' : setNumber(number+1)}>+</button>
                    </div>
                </div>
                <button type="button" className="btn btn-primary">Add to Cart</button>

            </div>
            </center>
        </div>
    );
}

export default Card;