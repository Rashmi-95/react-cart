import React from 'react';
import cartImg from '../../public/img/cart.png';

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }
  render() {
    return (
      <div>
      <div id="head">
        <h1 className="shop">ShopNow</h1>
        <div className="cart" >
          <div onClick={this.handleCartClick}>
            <img src={cartImg} alt="çå®†" />
            <span className="item-in-cart">CART <span className="count" >{this.state.cart.length}</span></span>
          </div>
        </div>
      </div>
      <div id="container">
      </div>
      <div className="footer">
        <p>Policies : Returns Policy | Terms of use | Security | Privacy | Infringement    © 2017-2017</p>
      </div>
      </div>
    );
  }
}