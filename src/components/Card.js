import React, { useState } from 'react';
import '../styles/App.css';
import CBUSquareLogo from '../assets/cbuSquare.png';

const Card = ({ item, cart, setShowToastify }) => {

    const [number, setNumber] = useState(0);
    

    const handleChange = (e) => {
        //allows only numbers to be inputted
        const re = /^[0-9\b]+$/;
        if (!re.test(e.target.value) || e.target.value > item.quantity){  
            setNumber(0);
            e.target.value = number;
            
        }else{
            setNumber(parseInt(e.target.value));
        }
    }

    const addToCart = () => {
        cart.push({
            item_id: item.id,
            item_name: item.name,
            url_image: item.url_image,
            description: item.description,
            num_ordered: number
        })
        setShowToastify(true);
    }

    const substractionQuantity = (e) => {
        if (number<=0){
            e.target.value = "";
        }else{
            setNumber(number-1);
            e.target.value = number;
        }
    }

    return (
        <div className="card mb-4">
            <center>
                <div className="card-body">
                { item.url_image === '' ? 
                    <img className="img-fluid rounded-start img" src={ CBUSquareLogo } alt="Item figure" width={"50%"} height={"50%"}/>  
                    :
                    <img className="img-fluid rounded-start img" src={ item.url_image } alt="Item figure" width={"50%"} height={"50%"}/>
                    }
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Quantity available: <strong>{item.quantity}</strong></p>
                 
                <div className="card-text">
                    Desired quantity: 
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={substractionQuantity}>-</button>
                        <input pattern="[0-9]+" className="form-control" id="numberSelection" value = {number} onChange={handleChange} defaultValue={number} min="0" max={item.quantity} />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={e => number >= item.quantity ? '' : setNumber(number+1)}>+</button>
                    </div>
                </div>
                <button type="button" onClick={addToCart} className="btn btn-primary" disabled={number < 1}>
                    Add to Cart
                </button>

            </div>
            </center>
        </div>
    );
}

export default Card;