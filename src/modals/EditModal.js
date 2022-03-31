import React, { useState } from 'react';
import axios from 'axios';

const EditModal = ({ showEditModal, selectedItem, setItems }) => {
    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }

    const [name, setName] = useState(selectedItem.name);
    const [quantity, setQuantity] = useState(selectedItem.quantity);
    const [description, setDescription] = useState(selectedItem.description);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://127.0.0.1:5000/api/editItem/${selectedItem.id}`, {
            name: name,
            quantity, quantity,
            description: description,
            url_image: "www.google.com"
        })
        .then(res => {
            console.log('ITEM EDITED', res);
        })
        .then(res => {
            axios.get('http://127.0.0.1:5000/api/getItems')
            .then(res => {
                setItems(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        })
        .catch(err => {
            console.log('ERROR:', err);
        })


        showEditModal(false);
    }

    

    return (
        <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Item</h5>
                        <button type="button" className="btn-close" onClick={() => showEditModal(false)}></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                    
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                                <label>Quantity:</label>
                                <input type="number" className="form-control" value={quantity} onChange={e => setQuantity(e.target.value)} />
                                <label>Description:</label>
                                <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                                <br />
                                <button type="button" className="btn btn-light">Upload Photo</button>
                            </div>
                    
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => showEditModal(false)}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditModal;