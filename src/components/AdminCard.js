import React from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi'
import axios from 'axios';
import '../styles/App.css'



const AdminCard = ({ id, name, description, quantity, showModal, setSelectedItem }) => {

    const selectItem = () => {
        showModal(true);
        const selectedItem = {
            id: id,
            name: name
        }
        setSelectedItem(() => selectedItem);
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
                <button type="button" className="btn btn-danger" onClick={() => selectItem()}>
                    <HiOutlineTrash />
                </button>

            </div>
            </center>
        </div>
    );
}

export default AdminCard;