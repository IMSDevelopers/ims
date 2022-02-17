import React from 'react';
import '../styles/App.css'


const Card = ({ description, quantity, url }) => {
    return (
        <div className="card">
            <img src={url} class="card-img-top" alt="URL to img would go here" />
            <center><div className="card-body">
                <h4 className="card-title">{description}</h4>
                <p className="card-text">Quantity available: <strong>{quantity}</strong></p>
                <p className="card-text">
                    Desired quantity: <input pattern="[0-9]+" id="numberSelection" defaultValue={1} type="number" min="1" max={quantity} required />
                </p>
                <button type="button" className="btn btn-primary">Add to Cart</button>
            </div></center>
        </div>
    );
}

export default Card;