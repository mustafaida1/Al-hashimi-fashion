import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { resetCart as resetCartAction } from '../../redux/cart/cart.actions';
import { getCartItems } from '../../redux/cart/cart.selectors'
import { getCurrentUser } from '../../redux/user/user.selectors'

import { createAddToCart } from '../../firebase/firebase.utils' 

const StripeCheckoutButton = ({ price, push, resetCart, carts, user }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_KzWXSJxJu3foClpqvGjmUlnp00c4Xcfgbb';

  const onToken = token => {
    alert('Successful payment!');
    console.log(carts)
    try{
      carts.map(cartItem => {
        createAddToCart(user, cartItem)
      })
      // createAddToCart(user, {...carts})
    } catch (error) {
      console.log(error)
    }
    resetCart();
   
  };

  return (
    <StripeCheckout
      label='Pay with 💳'
      name='AL-HASHIMI Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      panelLabel='Pay now'
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapStateToProps = state => ({
  carts: getCartItems(state),
  user: getCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  resetCart: () => dispatch(resetCartAction()),
  push: route => dispatch(push(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCheckoutButton);
