import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/default-monochrome.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component';
import { getCurrentUser } from '../../redux/user/user.selectors';
import { getCartHidden } from '../../redux/cart/cart.selectors';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';
import './header.css'

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, hidden, value, disabled, onTextChange }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
      
    </LogoContainer>
    
    <OptionsContainer>
    <div className="container">
      <input type="text" placeholder="Search..."/>
      <div className="search"></div>
    </div>
      <OptionLink to='/shop'>
        <span>SHOP</span>
      </OptionLink>
      {/* <OptionLink to='/contact'>
        <span>CONTACT</span>
      </OptionLink> */}
        <div className="dropdown">
          <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
          CATEGORY
          </button>
          <div className="dropdown-menu">
            
            <p className="dropdown-item" href="#"><OptionLink to="/shop/hats">Hats</OptionLink></p>
            <p className="dropdown-item" href="#"><OptionLink to="/shop/jackets">Jackets</OptionLink></p>
            <p className="dropdown-item" href="#"><OptionLink to="/shop/sneakers">Sneakers</OptionLink></p>
            <p className="dropdown-item" href="#"><OptionLink to="/shop/womens">Women</OptionLink></p>
            <p className="dropdown-item" href="#"><OptionLink to="/shop/mens">Men</OptionLink></p>
          </div>
        </div>
      
      
      <CartIcon />
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          <div className="containers">
            <img src="https://img.icons8.com/color/48/000000/administrator-male--v1.png" alt="Avatar" className="image" />
            <div className="middle">
              <div className="text">{currentUser ? currentUser.displayName : ''}</div>
            </div>
          </div>
          
        </OptionLink>
      ) : (
        <OptionLink to='/signIn'>
          <span>SIGN IN</span>
        </OptionLink>
      )}
    </OptionsContainer>
    {hidden ? null : <Cart />}
    {console.log(currentUser)}
  </HeaderContainer>
);

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
  hidden: getCartHidden(state)
});

export default connect(mapStateToProps)(Header);
