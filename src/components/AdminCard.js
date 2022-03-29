import React, { useState, useEffect } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi'
import axios from 'axios';
import '../styles/App.css'

const deleteItem = (id) => {
    console.log(id)
}

const AdminCard = ({ id, name, description, quantity }) => {
    useEffect(() => {
        console.log('render')
    }, []);

    return (
        <div className="card">
            <center>
                <div className="card-body">
                <h2>{name}</h2>
                <h4 className="card-title">{description}</h4>
                <p className="card-text">Quantity available: <strong>{quantity}</strong></p>

                {/* edit */}
                <button type="button" className="btn btn-primary">
                    <HiPencilAlt />
                </button>

                {/* delete */}
                <button type="button" className="btn btn-danger" onClick={() => deleteItem(id)}>
                    <HiOutlineTrash />
                </button>

            </div>
            </center>
        </div>
    );
}

export default AdminCard;