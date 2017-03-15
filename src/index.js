import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import Cart from './components/Cart.jsx';
import Payment from './components/Payment.jsx';

import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Route>
    <Route path="/cart" component={Cart} />
    <Route path="/payment" component={Payment} />
  </Router>,
  document.getElementById('root')
);

