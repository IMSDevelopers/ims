import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import React from "react";

function Home() {
    return(
        <div>
            <Navbar/>
            <div class="container">
                <div class="row g-3" style={{paddingTop: "20px"}}>
                        <div class="col-md-8">
                            <h1>College of Engineering Inventory</h1>
                        </div>
                        <div class="col-md-4" style={{paddingTop: "10px"}}>
                            <div class="input-group">
                                <span class="input-group-text">Filters: </span>
                                <select class="form-select">
                                    <option value="1" selected>Show All</option>
                                    <option value="2"> Cables</option>
                                    <option value="3"> Hardware</option>
                                    <option value="4"> Miscellaneous</option>
                                </select>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}


export default Home;