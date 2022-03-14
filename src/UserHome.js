import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import axios from "axios";

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
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row g-3" style={{ paddingTop: "20px" }}>
                    <div className="col-md-8">
                        <h1>College of Engineering Inventory</h1>
                    </div>
                </div>
                <div className="row">
                    {items.map(item => {
                        return (
                            <div className="col-md-2 align-self" key={item.id}>
                                <div className="mb-4">
                                    <Card name={item.name} description={item.description} quantity={item.quantity} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
