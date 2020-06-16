/* eslint-disable no-alert */
/* eslint-disable no-undef */

import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51GsRJJHlxi4lNyYm3auzda4TiePNNaA19b93XUVdcTYoYPyeVvFLCcKU45mQqTGVNAK04atVwCtSR3PvyF2zeXjN006VpZRWdv';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

StripeCheckoutButton.propTypes = {
  price: PropTypes.number.isRequired
};

export default StripeCheckoutButton;
