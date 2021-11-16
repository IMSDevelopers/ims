import React from 'react';
import bg from "./assets/CBU-image.jpg";
import NavbarLogin from './components/NavbarLogin';
import CBUlogo from './assets/cbulogo.png';
import './styles/Login.css'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import './MyRouter';
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {

    redirectToLogin = () => {
        const { history } = this.props;
        if(history) history.push('/');
    }

render(){  
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
                    <div style={{ marginTop: "8vh" }} class="d-flex justify-content-center" >
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
                                                pattern="[0-9]{6}"
                                                placeholder="CBU Student ID"

                                                required/>
                                        </div>
                                        <div class="input-group">
                                            <input
                                                class="form-control"
                                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                                                placeholder="Password"
                                                type="password"
                                                required/>
                                        </div>
                                        <br />
                                        <button class="btn btn-primary btn-lg " href="" type="submit">Submit</button>
                                         Already have an account? <a href="" onClick={() => { this.redirectToLogin() }}>Click here</a>
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
}

export default withRouter(Signup);