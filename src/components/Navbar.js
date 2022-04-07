import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import '../styles/App.css'
import { withRouter } from 'react-router-dom';
import { setGlobalState } from "../state/globalState";

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
    if(history) history.push('/');
  }

  redirectToAdminHome = () => {
    setGlobalState("userState", true);
    console.log("THIS IS A STRONG MESSAGE!");
    const { history } = this.props;
    if(history) history.push('/');
  }
 
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-cbu ">
        <div className="container-fluid ">
          <button onClick={() => { this.redirectToHome() }} className="navbar-brand white-word" id="linkHome">Inventory Management System</button>
        </div>
          <button 
            className="btn btn-warning me-3"
            type="submit"
            onClick={() => { this.redirectToCart() }}><AiOutlineShoppingCart />
          </button>
          <button 
            className="btn btn-warning me-3"
            onClick={() => { 
            this.redirectToAdminHome()}}>
              <AiOutlineUser />
          </button>
      </nav>
    );
  }
}

export default withRouter(Navbar);