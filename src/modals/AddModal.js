import React from 'react';
import axios from 'axios';

const AddModal = ({ 
    showAddModal, 
    selectedItem, 
    setItems 
}) => {
    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }

    return (
        <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Item</h5>
                        <button type="button" className="btn-close"></button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary">Cancel</button>
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddModal;