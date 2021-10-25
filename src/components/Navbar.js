import React from 'react';
import '../styles/App.css'

class Navbar extends React.Component {

  render(){

    return (

      <nav className="navbar navbar-expand-lg navbar-cbu ">
        <div className="container-fluid ">
          <a href="" className="navbar-brand white-word">Inventory Management System</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  
                </li> */}
              </ul>
              <form className="d-flex">
                {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success me-2" type="submit">Search</button> */}
            </form>
            </div>
        </div>
    </nav>

  )
  }
}


export default Navbar;