import React from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi'
import axios from 'axios';
import '../styles/App.css'



const AdminCard = ({ id, name, description, quantity, setItems }) => {
    const deleteItem = (id) => {
        axios.get(`http://127.0.0.1:5000/api/deleteItem/${id}`)
        .then(res => {
            console.log('Success:', res);
            axios.get('http://127.0.0.1:5000/api/getItems')
                .then(res => {
                    setItems(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
    }
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