import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import AdminCard from "./components/AdminCard";
import axios from 'axios';

let admin = true;

function Home() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/getItems')
            .then(res => {
                setItems(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [items]);

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
            <Navbar />
            {!admin ?
                <div className="container">
                    <div className="row g-3" style={{ paddingTop: "20px" }}>
                        <div className="col-md-8">
                            <h1>College of Engineering Inventory</h1>
                        </div>
                        <div className="col-md-4">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={inputHandler} placeholder="Search Items" />
                            </div>
                        </div>

                        <div className="row">
                            {filteredData.map(item => {
                                return (
                                    <div className="col-md-2 align-self" key={item.id}>
                                        <div className="mb-4">
                                            <Card name={item.name} description={item.description} quantity={item.quantity} setItems={setItems} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                :
                <div className="container">
                    <div className="row g-3" style={{ paddingTop: "20px" }}>
                        <div className="col-md-8">
                            <h1>College of Engineering Inventory</h1>
                        </div>
                        <div className="col-md-4">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={inputHandler} placeholder="Search Items" />
                            </div>
                        </div>

                        <div className="row">
                            {filteredData.map(item => {
                                return (
                                    <div className="col-md-2 align-self" key={item.id}>
                                        <div className="mb-4">
                                            <AdminCard id={item.id} name={item.name} description={item.description} quantity={item.quantity} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Home;
