import React from 'react';
import { connect } from 'react-redux'
import { getDiscount } from '../../redux/shop/shop.selectors'
import { CartItemContainer, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ cartItem: { imageUrl, price, name, quantity }, hiddent }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <span>{name}</span>
        {hiddent ? price -= price / 10 : price}
        <span>{`${quantity} x $${price}`}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

const mapStateToProps = state => ({
  hiddent: getDiscount(state)
})

export default connect(mapStateToProps)(CartItem);
