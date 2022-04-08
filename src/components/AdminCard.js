import React from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi';
import '../styles/App.css';
import CBUSquareLogo from '../assets/cbuSquare.png';
import '../styles/App.css';


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
        <div className="card mb-4">
            <center>
                
                { item.url_image === '' ? 
                    <img className="img-fluid rounded-start img" src={ CBUSquareLogo } alt="Item figure" />  
                    :
                    <img className="img-fluid rounded-start img" src={ item.url_image } alt="Item figure" />
                    }
                <div className="card-body">
                <h4 className="card-text">{item.name}</h4>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Quantity available: <strong>{item.quantity}</strong></p>
                </div>

                <div className="card-body text-center">
                    {/* edit */}
                    <button type="button" className="btn btn-primary m-3" onClick={() => selectEdit()}>
                        <HiPencilAlt />
                    </button>

                    {/* delete */}
                    <button type="button" className="btn btn-danger m-3" onClick={() => selectDelete()}>
                        <HiOutlineTrash />
                    </button>
                </div>
                

            
            </center>
        </div>
    );
}

export default AdminCard;