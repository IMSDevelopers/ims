import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { dummy } from './dummy.js';
import { withRouter } from 'react-router-dom';

class AddItem extends React.Component {

    constructor() {
        super()
        this.state = {
            description: '',
            quantity: 0,
            image: '',
        }
    }

    redirectToHome = () => {
        const { history } = this.props;
        if (history) history.push('/home');
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row g-3" style={{ paddingTop: "20px" }}>
                        <div className="col-md-8">
                            <h1>Add New Item</h1>
                        </div>

                        <div className="text-center">
                            <div className="mb-4">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Enter name" type="text" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="input-group">
                                    <textarea placeholder="Enter a description" className="form-control" rows={5}></textarea>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="input-group">
                                    <input className="form-control" placeholder="0" type="number" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Image" type="file" required />
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-md-3 align-self-center">
                            <div className="mb-4">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Enter name" type="text" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="input-group">
                                    <textarea placeholder="Enter a description" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Image" type="file" required />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="text-center">
                    <button
                        className="btn btn-warning btn-lg"
                        type="button"
                        onClick={() => { this.addItem() }}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(AddItem);