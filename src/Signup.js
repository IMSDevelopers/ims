import React from 'react';
import bg from "./assets/CBU-image.jpg";
import NavbarLogin from './components/NavbarLogin';
import CBUlogo from './assets/cbulogo.png';
import './styles/Login.css'

import {
    BrowserRouter as Router,
} from "react-router-dom";

import './MyRouter';


function Signup() {

    return (
        <Router>
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

                <div class="vh-100">
                    <NavbarLogin />
                    <div style={{ marginTop: "15vh" }} class="d-flex justify-content-center" >
                        <div class='col-md-3'>

                            <div style={{ backgroundColor: '#bf8d3c', borderColor: 'black', border: '3px solid' }} class="card">
                                <h4 style={{ color: 'white', }} class="d-flex justify-content-center">Sign Up</h4>
                            </div>

                            <div class="card text-center">

                                <form class="card-body">
                                    <div class="d-grid gap-2">
                                        <a href="https://calbaptist.edu/">
                                            <img src={CBUlogo} class="card-img-top small-img" alt="Login" />
                                        </a>
                                        <div class="input-group">
                                            <input
                                                class="form-control"
                                                placeholder="Enter your CBU email"

                                                required />
                                        </div>
                                        <div class="input-group">
                                            <input
                                                class="form-control"
                                                placeholder="Password"
                                                type="password"

                                                required />
                                        </div>
                                        <br />
                                        <button class="btn btn-primary btn-lg " href="" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>

    )
}

export default Signup;