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

                <div className="vh-100">
                    <NavbarLogin />
                    <div style={{ marginTop: "8vh" }} className="d-flex justify-content-center" >
                        <div className='col-md-3'>

                            <div style={{ backgroundColor: '#bf8d3c', borderColor: 'black', border: '3px solid' }} className="card">
                                <h4 style={{ color: 'white', }} className="d-flex justify-content-center">Sign Up</h4>
                            </div>

                            <div className="card text-center">

                                <form className="card-body">
                                    <div className="d-grid gap-2">
                                        <a href="https://calbaptist.edu/">
                                            <img src={CBUlogo} className="card-img-top small-img" alt="Login" />
                                        </a>
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                placeholder="CBU Student ID"
                                                required/>
                                        </div>
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                placeholder="Password"
                                                type="password"
                                                required/>
                                        </div>
                                        <br />
                                        <button className="btn btn-primary btn-lg " href="" type="submit">Submit</button>
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