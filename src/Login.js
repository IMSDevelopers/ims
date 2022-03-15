import React from "react";
import bg from "./assets/CBU-image.jpg";
import CBUlogo from './assets/cbulogo.png';
import NavbarLogin from "./components/NavbarLogin";

class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    setInputValue(property, val) {
        //val = val.trim();
        if (val.length > 8) { //change the input string size
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm() {
        this.setState({
            username: '',
            password: ''
        })
    }

    doLogin() {

        if (!this.state.username) {
            return;
        }
        if (!this.state.password) {
            return;
        }

        if (this.state.username === 'admin' && this.state.password === 'password') {
            this.routingFunction();
        } else {
            alert('Invalid Credentials')
        }
    }

    routingFunction = e => {
        this.props.history.push('/home')
    }

    render() {
        return (
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
                                <h4 style={{ color: 'white', }} className="d-flex justify-content-center">Login</h4>
                            </div>

                            <div className="card text-center">
                            
                                <a href="https://calbaptist.edu/">
                                    <img src={CBUlogo} className="card-img-top small-img" alt="Login" />
                                </a>
                                <form className="card-body">
                                    <div className="d-grid gap-3">
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                placeholder="Admin Login"
                                                value={this.state.username ? this.state.username : ''}
                                                onChange={(val) => this.setInputValue('username', val.target.value)}
                                                required />
                                        </div>
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                placeholder="Admin Password"
                                                type="password"
                                                value={this.state.password ? this.state.password : ''}
                                                onChange={(val) => this.setInputValue('password', val.target.value)}
                                                required />
                                        </div>                               
                                        <button
                                            className="btn btn-warning btn-lg"
                                            type="submit"
                                            onClick={() => { this.doLogin() }}>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login;