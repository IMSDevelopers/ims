import React, { useState } from 'react';
import axios from 'axios';

const EditModal = ({ showEditModal, selectedItem, setItems }) => {
    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }

    const editItem = () => {
        axios.get()
        .then(res => {
            console.log(res);
        })
        .catch(err => {

        })
    }

    const [formValues, setFormValues] = useState({});

    return (
        <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Item</h5>
                        <button type="button" className="btn-close" onClick={() => showEditModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="email" class="form-control" placeholder="Item name" value={selectedItem.name} />
                                <label for="name">Quantity:</label>
                                <input type="email" class="form-control" placeholder="Item name" value={selectedItem.name} />
                                <label for="name">Description:</label>
                                <input type="email" class="form-control" placeholder="Item name" value={selectedItem.name} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => showEditModal(false)}>Cancel</button>
                        <button type="button" className="btn btn-primary">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal;