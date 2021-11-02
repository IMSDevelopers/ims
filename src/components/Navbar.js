import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../styles/App.css'
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  redirectToLogin = () => {
    const { history } = this.props;
    if(history) history.push('/');
  }
 
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-cbu ">
        <div className="container-fluid ">
          <a href="https://calbaptist.edu/college-of-engineering/" className="navbar-brand white-word">Inventory Management System</a>
         </div>
        <div class= "">
          <form class="d-flex">
          <button 
            class="btn btn-warning me-3"
            type="submit"
            onClick={() => { this.redirectToLogin() }}><AiOutlineShoppingCart />
          </button>
          <button 
            class="btn btn-warning me-3"
            type="submit"
            onClick={() => { this.redirectToLogin() }}><FiLogOut />
          </button>
          </form>
        </div>
    </nav>
    )
  }
}


export default withRouter(Navbar);