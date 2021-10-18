import React from 'react';
import '../App.css'
import UserStore from '../stores/UserStore';
import { FiLogOut } from 'react-icons/fi';
import { observer } from 'mobx-react';

class Navbar extends React.Component{
  
  async doLogout() {
    try{

        let res = await fetch('/logout', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let result = await res.json();

        if (result && result.success){
            UserStore.isLoggedIn = false; 
            UserStore.username=''; 
        } 

    } catch(e){
        console.log(e);
    }
  }

  render(){

    //console.log(UserStore)

    const renderLogoutButton = () => {
      if(UserStore.isLoggedIn){
        return (<button class="btn btn-warning me-2" onClick={() => this.doLogout()} >
                    <FiLogOut/>
                    </button>)
      }else{
        return ('')
      }
    }

    return (

      <nav class="navbar navbar-expand-lg navbar-cbu ">
        <div class="container-fluid ">
          <a class="navbar-brand white-word">Inventory Management System</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
              <form class="d-flex">
                {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success me-2" type="submit">Search</button> */}
                { renderLogoutButton() }
            </form>
            </div>
        </div>
    </nav>

  )
  }
}


export default observer(Navbar);