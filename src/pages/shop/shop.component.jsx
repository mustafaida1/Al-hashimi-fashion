import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../../components/collection/collection.component';
import { ShopPageContainer } from './shop.styles';

const ShopPage = ({ match }) => (
  <ShopPageContainer>
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button> */}



    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    
    <Route path={`${match.path}/:categoryId`} component={Collection} />
    
  </ShopPageContainer>
);

export default ShopPage;
