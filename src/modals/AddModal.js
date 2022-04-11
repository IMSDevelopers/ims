import React, { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

const AddModal = ({ 
    showAddModal, 
    setItems,
    setAddToastify 
}) => {
    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");
    const [selectFile, setSelectFile] = useState();
    const [fileName, setFileName] = useState("");
    const [urlFile, setUrlFile] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    let pictureUrl="";

    const handleChangeFile = (e) => {
        setSelectFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setUrlFile(URL.createObjectURL(e.target.files[0]));
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
                submitItem(pictureUrl)
            })
        } else {
            submitItem(pictureUrl)
        }

        showAddModal(false);
        setAddToastify(true);
               
    }


    const submitItem = (url) =>{

        axios.post("http://127.0.0.1:5000/api/postItem", {
            name: name,
            quantity: quantity,
            description: description,
            url_image: url
        })
        .then(res => {
            console.log('ITEM POSTED', res); 
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
                <div className="alert alert-success" style={{marginTop:"10px"}} role="alert">
                    Item Created.
                </div>)}
            
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Item</h5>
                        <button type="button" className="btn-close" onClick={() => showAddModal(false)}></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                                <label>Quantity:</label>
                                <input type="number" className="form-control" value={quantity} min={0} onChange={e => setQuantity(e.target.value)} />
                                <label>Description:</label>
                                <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                                <br />
                                <label for="picUpload" className='custom-file-upload'>Upload Picture of item</label>
                                <input id="picUpload" type="file" accept="image/*|
                                    image/heic|image/heif" name="file" onChange={handleChangeFile}
                                    style={{position: "absolute", left: '-99999rem'}}/>
                                <label>{fileName}</label>
                                { selectFile == null ?
                                <img src='' alt=''/>
                                :
                                <img src={urlFile} className="img" alt='Selected File'/>
                                }
                                
                            </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => showAddModal(false)}>Cancel</button>
                        <button type="submit" className="btn btn-primary" disabled={quantity <= 0}>Add</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddModal;