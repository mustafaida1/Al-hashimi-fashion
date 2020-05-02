import React from 'react';
import { connect } from 'react-redux';
import Modal from '../modal/modal'
import { addItemToCart } from '../../redux/cart/cart.actions';
import { setCurrentPath } from '../../redux/user/user.actions'
import { getPathLoc } from '../../redux/user/user.selectors'
import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';
import './fontawesome.css'

const CollectionItem = ({ item, setCurrentPath, path }) => {
  const { imageUrl, name, price, description } = item;
  console.log(path)
  return (
    <div>
    <CollectionItemContainer>
    
    <BackgroundImage className='background-image' imageUrl={imageUrl} />

      
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      {/* <AddButton className="add-button"
       
        
        onClick={() => dispatch(addItemToCart(item))}
      >
        ADD TO CART
        
    
      </AddButton> */}
      
      <button type="button" class="btn btn-primary" onClick={() => setCurrentPath(`${name} ${price} ${imageUrl} ${description}`)}  data-toggle="modal" data-target="#modalQuickView">Launch
  modal</button>

      <Modal item={item}/>
      </CollectionItemContainer>
      </div>
      
      
  );
};

const mapStateToProps = state => ({
  path: getPathLoc(state)
  
});

const mapDispatchToProps = dispatch => ({
  setCurrentPath: path => dispatch(setCurrentPath(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
