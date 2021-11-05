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

  redirectToCart = () => {
    const { history } = this.props;
    if(history) history.push('/cart');
  }
 
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-cbu ">
        <div className="container-fluid ">
          <a href="https://calbaptist.edu/college-of-engineering/" className="navbar-brand white-word">Inventory Management System</a>
         </div>
          <form class="d-flex">
          <button 
            class="btn btn-warning me-3"
            type="submit"
            onClick={() => { this.redirectToCart() }}><AiOutlineShoppingCart />
          </button>
          <button 
            class="btn btn-warning me-3"
            type="submit"
            onClick={() => { this.redirectToLogin() }}><FiLogOut />
          </button>
          </form>
    </nav>
    )
  }
}

export default withRouter(Navbar);