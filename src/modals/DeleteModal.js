import React, { useState } from 'react';
import axios from 'axios';

const DeleteModal = ({ 
    showDeleteModal, 
    selectedItem, 
    setItems 
}) => {
    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }

    const [showAlert, setShowAlert] = useState(false);

    const deleteItem = () => {
        axios.get(`http://127.0.0.1:5000/api/deleteItem/${selectedItem.id}`)
            .then(res => {
                console.log(res);
                console.log('Deleted: ', selectedItem.name);
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
                console.log(err);
        });

        setShowAlert(true);
         
        setTimeout(()=> {
            showDeleteModal(false);
         }, 1500); 
        
    }

    return (
        <div className="modal show fade" style={modalStyle}>
            {showAlert && (
                <div className="alert alert-danger" style={{marginTop:"10px"}} role="alert">
                    Item Deleted.
                </div>)}
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete '{selectedItem.name}'?</h5>
                        <button type="button" className="btn-close" onClick={() => showDeleteModal(false)}></button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => showDeleteModal(false)}>Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={() => deleteItem()}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;