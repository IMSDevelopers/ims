import React from 'react';

const Card = ({ description, quantity, url }) => {
    return (
        <div className="card">
            <img src={url} class="card-img-top" alt="URL to img would go here" />
            <div className="card-body">
                <h4 className="card-title">{description}</h4>
                <p className="card-text">Quantity: <strong>{quantity}</strong></p>
                <button type="button" className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    );
}

export default Card;