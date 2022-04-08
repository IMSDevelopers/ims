import React, { useState } from 'react';
import axios from 'axios';

const EditModal = ({ showEditModal, selectedItem, setItems, setEditToastify }) => {
    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }

    const [name, setName] = useState(selectedItem.name);
    const [quantity, setQuantity] = useState(selectedItem.quantity);
    const [description, setDescription] = useState(selectedItem.description);
    const [imageUrl, setImageUrl] = useState(selectedItem.urlItem);

    const [selectFile, setSelectFile] = useState();
    const [showAlert, setShowAlert] = useState(false);

    let pictureUrl="";

    const handleChangeFile = (e) => {
        setSelectFile(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        if( selectFile != null){
            data.append("file", selectFile);
            //Upload picture and get the Object URL
            axios.post("http://127.0.0.1:5000/api/upload", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(res => {
                pictureUrl = res.data;
                submitEdittedItem(pictureUrl);
            })
        } else {
            submitEdittedItem(imageUrl);
        }

        
        showEditModal(false);
        setEditToastify(true);
        
    }

    const submitEdittedItem = (url) => {
        axios.put(`http://127.0.0.1:5000/api/editItem/${selectedItem.id}`, {
            name: name,
            quantity: quantity,
            description: description,
            url_image: url
        })
        .then(res => {
            console.log('ITEM EDITED', res);
            setShowAlert(true);
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
    }

    

    return (
        <div className="modal show fade" style={modalStyle}>
            {showAlert && (
                <div className="alert alert-info" style={{marginTop:"10px"}} role="alert">
                    Item Updated.
                </div>)}

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

                                <label for="picUpload" className='custom-file-upload'>Upload Picture of item</label>
                                <input id="picUpload" type="file" accept="image/*|
                                    image/heic|image/heif" name="file" onChange={handleChangeFile}
                                    style={{position: "absolute", left: '-99999rem'}}/>
                                
                                <br />
                                { imageUrl === '' ?
                                <img src='' alt=''/>
                                :
                                <img src={imageUrl} className="img" alt='Selected File'/>
                                }
                            </div>
                    
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => showEditModal(false)}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditModal;