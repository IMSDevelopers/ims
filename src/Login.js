import React from "react";
import bg from "./assets/CBU-image.jpg";
import Navbar from './components/Navbar';
import CBUlogo from './assets/cbulogo.png';
import { withRouter } from "react-router";
import UserStore from "./stores/UserStore";
import { observer } from 'mobx-react';

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

        if (this.state.username === 'admin' && this.state.password === 'admin') {
            this.routingFunction();
        } else {
            alert('Invalid Credentials')
        }

        // try{

        //     let res = await fetch('/login', {
        //         method: 'post',
        //         header: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             username: this.state.username,
        //             password: this.state.password
        //         })
        //     })

        //     let result = await res.json();

        //     if(result && result.success) {
        //         UserStore.isLoggedIn = true;
        //         UserStore.username=result.username;
        //     } else if (result && result.success == false){
        //         this.resetForm();
        //         alert(result.msg);
        //     }

        // } catch(e){
        //     console.log(e);
        //     this.resetForm();
        // }
    }

    routingFunction = e => {
        this.props.history.push('/home')
    }

    async componentDidMount() {
        try {

            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();

            if (result && result.success) {
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;

            } else {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;

            }

        } catch (e) {
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }
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
                    <Navbar />
                    <div style={{ marginTop: "8vh" }} class="d-flex justify-content-center" >
                        <div class='col-md-3'>
                            
                            <div style={{ backgroundColor: '#bf8d3c', borderColor: 'black', border: '3px solid' }} class="card">
                                <h4 style={{ color: 'white', }} class="d-flex justify-content-center">Login</h4>
                            </div>

                            <div clasName="card text-center">
                            
                                <a href="https://calbaptist.edu/">
                                    <img src={CBUlogo} class="card-img-top small-img" alt="Login" />
                                </a>
                                <form className="card-body">
                                    <div className="d-grid gap-4">
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                placeholder="CBU Email"
                                                value={this.state.username ? this.state.username : ''}
                                                onChange={(val) => this.setInputValue('username', val.target.value)}
                                                required />
                                        </div>
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                placeholder="Password"
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

                                        <button
                                            className="btn btn-primary btn-lg"
                                            type="button"
                                            onClick={() => { this.props.history.push('/signup') }}>
                                            Sign Up
                                        </button>
                                        <button
                                            className="btn btn-primary btn-lg"
                                            type="button"
                                            onClick={() => { this.props.history.push('/home') }}>
                                            Goto Home
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


export default withRouter(observer(Login));