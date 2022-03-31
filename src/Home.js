import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import Card from "./components/Card";
import AdminCard from "./components/AdminCard";
import axios from 'axios';

import DeleteModal from "./modals/DeleteModal";
import EditModal from "./modals/EditModal";
import AddModal from "./modals/AddModal";

let admin = true;

function Home() {

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState({}); // state to handle the ITEM selected by user for MODAL

    // 'show' states for modals
    const [deleteModal, showDeleteModal] = useState(false);
    const [editModal, showEditModal] = useState(false);
    const [addModal, showAddModal] = useState(false);

    // initial load
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/getItems')
            .then(res => {
                setItems(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    // re-render when items change
    useEffect(() => {
    }, [items])

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    //Enter the JSON file to filter its items
    const filteredData = items.filter((item) => {
        //if no input the return the original
        if (inputText === '') {
            return item;
        }
        //return the item which contains the user input
        else {
            return item.name.toLowerCase().includes(inputText)
        }
    })

    return (
        <div>
            
            {!admin ?
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <div className="row g-3" style={{ paddingTop: "20px" }}>
                        <div className="col-md-8">
                            <h1>College of Engineering Inventory</h1>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" onChange={inputHandler} placeholder="Search Items" />
                            </div>
                        </div>

                        <div className="row">
                            {filteredData.map(item => {
                                return(
                                    <div className="col-md-2 align-self" key={item.id}>
                                        <div className="mb-4">
                                            <Card name={item.name} description={item.description} quantity={item.quantity} 
                                            setItems={setItems} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
                </React.Fragment>
                :
                <React.Fragment>
                <AdminNavbar showAddModal={showAddModal}/>
                <div className="container">
                    <div className="row g-3" style={{ paddingTop: "20px" }}>
                        <div className="col-md-8">
                            <h1>College of Engineering Inventory</h1>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" onChange={inputHandler} placeholder="Search Items" />
                            </div>
                        </div>

                        <div className="row">
                            {filteredData.map(item => {
                                return (
                                    <React.Fragment>
                                        <div className="col-md-2 align-self" key={item.id}>
                                            <div className="mb-4">
                                                <AdminCard item={item} showDeleteModal={showDeleteModal} showEditModal={showEditModal}
                                                    setSelectedItem={setSelectedItem} />
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                            {deleteModal === true ? <DeleteModal showDeleteModal={showDeleteModal} selectedItem={selectedItem} setItems={setItems} /> : <React.Fragment></React.Fragment>}
                            {editModal === true ? <EditModal showEditModal={showEditModal} selectedItem={selectedItem} setItems={setItems} /> : <React.Fragment></React.Fragment>}
                            {addModal === true ? <AddModal showAddModal={showAddModal} selectedItem={selectedItem} setItems={setItems} /> : <React.Fragment></React.Fragment>}
                        </div>
                    </div>
                </div>
                </React.Fragment>
                }
        </div>
    );
}

export default Home;