import React from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/header/header.component';

import { getSections } from '../redux/directory/directory.selector.js';
import { getShopItems } from '../redux/shop/shop.selectors.js';

import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import ContactPage from '../pages/contact/contact';
import SigninAndSignupPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from '../pages/checkout/checkout.component';



import { setCurrentUser } from '../redux/user/user.actions';
import { getCurrentUser } from '../redux/user/user.selectors';
import { setCurrentPath } from '../redux/user/user.actions';
import { getPathLoc } from '../redux/user/user.selectors';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import Description from '../pages/descrip/description'
import './App.scss';

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount = () => {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // userAuth returns null when auth.signOut() is called
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          console.log(userAuth.photoURL)
          setCurrentUser({ id: snapShot.id, ...snapShot.data(), url: userAuth.photoURL });
        });
      }

      setCurrentUser(userAuth);
    });
  };

  componentWillUnmount = async () => {
    this.unsubscribeFromAuth();
  };
  
  render() {
   
    
    return (
      <div className='App' >
         
        <Header />
        
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path="/product/des" component={Description}/>
          <Route
            exact
            path='/signIn'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SigninAndSignupPage />
              )
            }
          />
            
          {this.props.currentUser ? <Route exact path='/contact' component={ContactPage} /> : <h1 className="center">Register or Signin to complete</h1>}
         
          
          {this.props.currentUser ? <Route exact path='/checkout' component={CheckoutPage} /> : <h1 className="center">Register or Signin</h1> } 
        </Switch>
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
  sections: getSections(state),
  shop: getShopItems(state),
  path: getPathLoc(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setCurrentPath: path => dispatch(setCurrentPath(path))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
