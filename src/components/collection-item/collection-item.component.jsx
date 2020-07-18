import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { setCurrentPath } from '../../redux/user/user.actions'
import { getDiscount } from '../../redux/shop/shop.selectors'
// import { reItem } from '../../redux/cart/cart.actions'
import { getPathLoc } from '../../redux/user/user.selectors'
// import { getItems } from '../../redux/cart/cart.selectors'
import { Link } from 'react-router-dom' 


import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';
import './fontawesome.css'

const CollectionItem = ({ item, dispatch, discount, setCurrentPath }) => {
  const { imageUrl, name, price, description } = item;
  const dis = price / 10;
  return (
    <div>
    <Link to="/product/des" onClick={() => setCurrentPath(item)}>
    <CollectionItemContainer>
    
    
    <BackgroundImage className='background-image' imageUrl={imageUrl}></BackgroundImage>
    
      <CollectionFooterContainer >
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${discount ? price - dis : price }</PriceContainer>
      </CollectionFooterContainer>
      
      {/* <AddButton className="add-button"
        onClick={() => dispatch(addItemToCart(item))}
      >
        ADD TO CART
        
      
      // </AddButton> */}
      {/* <AddButton className="add-button"
       
       data-toggle="modal" data-target="#modalQuickView"
        
        onClick={() => dispatch(setCurrentPath(`${name} ${price} ${imageUrl} ${description}`))}
       
      >
        QUICK VIEW
        
      
      </AddButton> */}
      
      {/* <button type="button" class="btn btn-primary" onClick={() => setCurrentPath(`${name} ${price} ${imageUrl} ${description}`)}  data-toggle="modal" data-target="#modalQuickView">Quick View</button> */}

    {/* <Modal item={item} /> */}
      </CollectionItemContainer>
     </Link>
      </div>
  );
};

const mapStateToProps = state => ({
  path: getPathLoc(state),
  discount: getDiscount(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentPath: path => dispatch(setCurrentPath(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
