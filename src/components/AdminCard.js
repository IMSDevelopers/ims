import React from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi';
import '../styles/App.css';
import CBUSquareLogo from '../assets/cbuSquare.png';


const AdminCard = ({ item, showDeleteModal, showEditModal, setSelectedItem }) => {

    const selectItem = () => {
        const selectedItem = {
            id: item.id,
            name: item.name,
            description: item.description,
            quantity: item.quantity,
            urlItem: item.url_image
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
                { item.url_image === '' ? 
                    <img src={ CBUSquareLogo } alt="Item figure" width={"50%"} height={"50%"}/>  
                    :
                    <img src={ item.url_image } alt="Item figure" width={"50%"} height={"50%"}/>
                    }
                
                <h4>{item.name}</h4>
                <h4 className="card-title">{item.description}</h4>
                <p className="card-text">Quantity available: <strong>{item.quantity}</strong></p>

                {/* edit */}
                <button type="button" className="btn btn-primary" onClick={() => selectEdit()}>
                    <HiPencilAlt />
                </button>

                {/* this adds spacing between the two buttons */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

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