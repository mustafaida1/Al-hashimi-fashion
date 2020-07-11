import React from 'react';
import { connect } from 'react-redux';

import { getDiscount } from '../../redux/shop/shop.selectors'

import {
  removeItemAllFromCart,
  addItemToCart,
  removeItemFromCart
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveItemContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem, hiddent }) => {
  const { imageUrl, price, name, quantity, id } = cartItem;
  let pri = price;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(id)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>
      ${hiddent ? pri -= pri / 10 : pri}
        
        </TextContainer>
      <RemoveItemContainer onClick={() => clearItem(id)}>
        &#x2715;
      </RemoveItemContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: cartItemId => dispatch(removeItemAllFromCart(cartItemId)),
  addItem: cartItemId => dispatch(addItemToCart(cartItemId)),
  removeItem: cartItemId => dispatch(removeItemFromCart(cartItemId))
});

const mapStateToProps = state => ({
  hiddent: getDiscount(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutItem);
