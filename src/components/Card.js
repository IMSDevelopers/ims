import React, { useState } from 'react';
import '../styles/App.css';
import CBUSquareLogo from '../assets/cbuSquare.png';

const Card = ({ name, description, quantity, urlImage }) => {

    const [number, setNumber] = useState(0);
    

    const handleChange = (e) => {
        //allows only numbers to be inputted
        const re = /^[0-9\b]+$/;
        if (!re.test(e.target.value) || e.target.value > quantity){  
            setNumber(0);
            e.target.value = number;
            
        }else{
            setNumber(parseInt(e.target.value));
        }
    }

    const addToCart = (e) => {
        alert("Button pressed. " + number );
        console.log(number)
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
        <div className="card">
            <center>
                <div className="card-body">
                { urlImage === '' ? 
                    <img src={ CBUSquareLogo } alt="Item figure" width={"50%"} height={"50%"}/>  
                    :
                    <img src={ urlImage } alt="Item figure" width={"50%"} height={"50%"}/>
                    }
                <h2>{name}</h2>
                <h4 className="card-title">{description}</h4>
                <p className="card-text">Quantity available: <strong>{quantity}</strong></p>
                <div className="card-text">
                    Desired quantity: 
                    <div class="input-group mb-3">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={substractionQuantity}>-</button>
                        <input pattern="[0-9]+" class="form-control" id="numberSelection" value = {number} onChange={handleChange} defaultValue={number} min="0" max={quantity} />
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={e => number >= quantity ? '' : setNumber(number+1)}>+</button>
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