import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { dummy } from './dummy.js';
//import axios from "axios";

// const getItems = () => {
//     axios.get('http://127.0.0.1:5000/api/getItems')
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

function Home() {
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
                    {dummy.map(item => {
                        return (
                            <div className="col-md-2 align-self">
                                <div className="mb-4">
                                    <Card description={item.description} quantity={item.quantity} url={item.url} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* <div className="row">
                    <button type="button" className="btn btn-primary" onClick={() => getItems()}>GET ITEMS</button>
                </div> */}
            </div>
        </div>
    );
}

export default Home;