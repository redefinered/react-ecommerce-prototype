import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Creators as CartActionCreators } from 'modules/ducks/cart/cart.actions';
import { selectCartItemsCount } from 'modules/ducks/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const actions = {
  toggleCartHidden: CartActionCreators.toggleCartHidden
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func,
  itemCount: PropTypes.number
};

export default connect(mapStateToProps, actions)(CartIcon);
