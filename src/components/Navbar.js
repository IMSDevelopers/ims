import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import '../styles/App.css'
import { withRouter } from 'react-router-dom';
import { setGlobalState } from "../state/globalState";

const Navbar = ({ history }) => {

  const redirectToCart = () => {
    if(history) history.push('/cart');
  }

  const redirectToAdminHome = () => {
    setGlobalState("userState", true);
    if (history) history.push('/');
  }

  return (
    <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-cbu">
      <div className="container-fluid ">
        <button className="navbar-brand white-word" id="linkHome">Inventory Management System</button>
      </div>
      <button
        className="btn btn-warning me-3"
        type="submit"
        onClick={() => redirectToCart()}>
        <AiOutlineShoppingCart />
      </button>
      <button
        className="btn btn-warning me-3"
        onClick={() => redirectToAdminHome()}>
        <AiOutlineUser />
      </button>
    </nav>
    {/* {cartModal === true ? <CartModal showCartModal={showCartModal} cart={cc} /> : <React.Fragment></React.Fragment> } */}
    </React.Fragment>
  );
}

export default withRouter(Navbar);