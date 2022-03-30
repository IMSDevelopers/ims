import React from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi'
import '../styles/App.css'


const AdminCard = ({ item, name, description, quantity, showDeleteModal, showEditModal, setSelectedItem }) => {

    const selectItem = () => {
        const selectedItem = {
            id: item.id,
            name: item.name,
            description: item.description,
            quantity: item.quantity
        }
        setSelectedItem(() => selectedItem);
    }

    const selectDelete = () => {
        selectItem();
        showDeleteModal(true);
    }

    const selectEdit = () => {
        selectItem();
        showEditModal(true);
    }

    return (
        <div className="card">
            <center>
                <div className="card-body">
                <h2>{item.name}</h2>
                <h4 className="card-title">{item.description}</h4>
                <p className="card-text">Quantity available: <strong>{item.quantity}</strong></p>

                {/* edit */}
                <button type="button" className="btn btn-primary" onClick={() => selectEdit()}>
                    <HiPencilAlt />
                </button>

                {/* delete */}
                <button type="button" className="btn btn-danger" onClick={() => selectDelete()}>
                    <HiOutlineTrash />
                </button>

            </div>
            </center>
        </div>
    );
}

export default AdminCard;