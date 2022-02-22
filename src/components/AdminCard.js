import React, { useState } from 'react';
import '../styles/App.css'

const AdminCard = ({ description, quantity, url }) => {

    const [number, setNumber] = useState(1);

    function confirmDelete() {
        window.confirm('Are you sure you want to delete this item?')
    }

    return (
        <div className="card">
            <button type="button" onClick={confirmDelete} class="close" aria-label="Close" style={{backgroundColor:"#d9534f",color:"white"}} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete" data-toggle="modal" data-target="#exampleModal">
                <span aria-hidden="true">&times;</span>
            </button>

            <img src={url} class="card-img-top" alt="URL to img would go here" />
            <center><div className="card-body">
                <h4 className="card-title">{description}</h4>
                Current quantity:
                <div class="input-group mb-3">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={e => number <= 1 ? '' : setNumber(number-1)}>-</button>
                        <input pattern="[0-9]+" class="form-control" id="numberSelection" value={number} defaultValue={quantity} required disabled/>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={e => setNumber(number+1)}>+</button>
                    </div>
                <button type="button" className="btn btn-primary">Update</button>
            </div></center>
        </div>
    );
}

export default AdminCard;