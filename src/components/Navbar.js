import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
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

  redirectToHome = () => {
    const { history } = this.props;
    if(history) history.push('/home');
  }


 
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-cbu ">
        <div className="container-fluid ">
          <button onClick={() => { this.redirectToHome() }} className="navbar-brand white-word" id="linkHome">Inventory Management System</button>
        </div>
          {/* <div class="input-group">
              <input type="text" class="form-control" placeholder="Search"/>
          <button
            type="button" 
            class="btn btn-primary me-3"><AiOutlineSearch/>
          </button>
        </div> */}
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
      </nav>
    )
  }
}

export default withRouter(Navbar);