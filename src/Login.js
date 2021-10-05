import React from 'react';
import bg from "./assets/CBU-image.jpg";
import Navbar from './components/Navbar';


function Login() {
    return (
        // <div style= {{
        //     backgroundImage: `url(${bg})`,
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat'}}>
        // </div>
        <React.Fragment>
            <Navbar />
            <div class="d-flex justify-content-center ">


                <div class='col-md-3'>


                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">Login</h5>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary btn-lg " type="button">Student Login</button>
                                <button class="btn btn-warning btn-lg" type="button">Admin Login</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Login;