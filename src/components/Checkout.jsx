import React from 'react';
import productDetails from '../productDetails.js';
import CheckoutProduct from './CheckoutProduct.jsx';
import { Link } from 'react-router';

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }
  render() {
    const products = productDetails;
    let size = 0
    const productsDom = products.map((product, index) => {
      size += product.quantity
      return <CheckoutProduct key={index} product={product} />
    })
    return (
      <div>
        <div className="header">
          <h1 className="cartname">CART</h1>
          <span className="username"> Hi, Rashmi </span>
          <Link className="logout" to="/signin" activeClassName="active">Logout</Link>
        </div>
        <div id="container">
          <p className="showing">Showing {size} products</p>
          {productsDom}
          <div className="buy-product">
            <Link to="/checkout" className="add-to-cart" activeClassName="active">Checkout</Link>
          </div>
        </div>
        <div className="footer">
          <p> Go Cart © 2017-present</p>
        </div>
      </div>
    );
  }
}