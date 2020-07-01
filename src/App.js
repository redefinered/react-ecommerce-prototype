import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './modules/ducks/user/user.selectors';
import { Creators as UserActionCreators } from 'modules/ducks/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

// import { addCollectionAndDocuments } from 'firebase-client/firebase.utils';
// import collectionsData from 'modules/ducks/shop/shop.data';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.checkUserSessionAction();

    // let objects = Object.keys(collectionsData).map((key) => collectionsData[key]);
    // addCollectionAndDocuments('collections', objects);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const actions = {
  checkUserSessionAction: UserActionCreators.checkUserSession
};

App.propTypes = {
  currentUser: PropTypes.object,
  checkUserSessionAction: PropTypes.func
};

export default connect(mapStateToProps, actions)(App);
