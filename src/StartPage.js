import React from "react";
import bg from "./assets/CBU-image.jpg";
import CBUlogo from './assets/cbulogo.png';
import NavbarLogin from "./components/NavbarLogin";

class StartPage extends React.Component {

    routingFunction = e => {
        this.props.history.push('/home')
    }

    routingFunction2 = e => {
        this.props.history.push('/Login')
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
                                <h4 style={{ color: 'white', }} className="d-flex justify-content-center">Welcome!</h4>
                            </div>

                            <div className="card text-center">
                            
                                <a href="https://calbaptist.edu/">
                                    <img src={CBUlogo} className="card-img-top small-img" alt="Login" />
                                </a>
                                <form className="card-body">
                                    <div className="d-grid gap-3">                           
                                    <button
                                        className="btn btn-warning btn-lg"
                                        type="submit"
                                        onClick={() => { this.routingFunction() }}>
                                        Student Login
                                    </button>
                                    <button
                                        className="btn btn-primary btn-lg"
                                        type="submit"
                                        onClick={() => { this.routingFunction2() }}>
                                        Admin Login
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


export default StartPage;