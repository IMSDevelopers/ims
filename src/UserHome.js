import React, { useState }  from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { dummy } from './dummy.js';
import AdminCard from './components/AdminCard';
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

function Home(){

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    //Enter the JSON file (in this case dummy.js) to filter its items
    const filteredData = dummy.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.description.toLowerCase().includes(inputText)
        }
    })

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row g-3" style={{ paddingTop: "20px" }}>
                    <div className="col-md-8">
                        <h1>College of Engineering Inventory</h1>
                    </div>
                    <div className="col-md-4">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" onChange={inputHandler} placeholder="Search Items"/>
                        </div>
                    </div>
                    
                <div className="row">
                    {filteredData.map(item => {
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
        </div>
    );
}

export default Home;