import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Creators as UserActionCreators } from 'modules/ducks/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from 'modules/ducks/cart/cart.selectors';
import { selectCurrentUser } from 'modules/ducks/user/user.selectors';

import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from 'assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden, signOutAction }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => signOutAction()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool,
  signOutAction: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const actions = {
  signOutAction: UserActionCreators.signOut
};

export default connect(mapStateToProps, actions)(Header);
