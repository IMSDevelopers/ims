import React from 'react';
import bg from "./assets/CBU-image.jpg";
import Navbar from './components/Navbar';
import CBUlogo from './assets/cbulogo.png';
import './Login.css'


function Login() {
    return (
        <div style= {{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat'}}>
             
            <div  class="vh-100">
            <Navbar />                 
            <div style ={{marginTop: "15vh"}} class="d-flex justify-content-center" >


                <div class='col-md-3'>

                    
                    <div class="card text-center">
                        <img src={CBUlogo} class="card-img-top small-img" alt="Login"/>
                        <div class="card-body">
                            <div class="d-grid gap-2">
                                
                                <button class="btn btn-primary btn-lg " type="button">Student Login</button>
                                <button class="btn btn-warning btn-lg" type="button">Admin Login</button>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>     
            </div>
    )
}

export default Login;