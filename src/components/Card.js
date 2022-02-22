import React, { useState } from 'react';
import '../styles/App.css'

const Card = ({ description, quantity, url }) => {

    const [number, setNumber] = useState(1);

    return (
        <div className="card">
            <img src={url} class="card-img-top" alt="URL to img would go here" />
            <center>
                <div className="card-body">
                <h4 className="card-title">{description}</h4>
                <p className="card-text">Quantity available: <strong>{quantity}</strong></p>
                <p className="card-text">
                    Desired quantity: 
                    <div class="input-group mb-3">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={e => number <= 1 ? '' : setNumber(number-1)}>-</button>
                        <input pattern="[0-9]+" class="form-control" id="numberSelection" value={number} defaultValue={1} min="1" max={quantity} required disabled/>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={e => number >= quantity ? '' : setNumber(number+1)}>+</button>
                    </div>
                </p>
                <button type="button" className="btn btn-primary">Add to Cart</button>

            </div>
            </center>
        </div>
    );
}

export default Card;