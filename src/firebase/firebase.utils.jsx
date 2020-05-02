import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const config = {
//   apiKey: 'AIzaSyCiflpMAPyFWgRXFJ0qesbUyELut0xATsM',
//   authDomain: 'crwn-clothing-live.firebaseapp.com',
//   databaseURL: 'https://crwn-clothing-live.firebaseio.com',
//   projectId: 'crwn-clothing-live',
//   storageBucket: 'crwn-clothing-live.appspot.com',
//   messagingSenderId: '355873179783'
// };

const config = {
  apiKey: "AIzaSyDbiS9LKu36CxqFVkMWFabEQL5Y9jnWuDc",
  authDomain: "hashimi-6f50c.firebaseapp.com",
  databaseURL: "https://hashimi-6f50c.firebaseio.com",
  projectId: "hashimi-6f50c",
  storageBucket: 'hashimi-6f50c.appspot.com',
  messagingSenderId: "509017830918"
};
// var firebaseConfig = {
//   apiKey: "AIzaSyDbiS9LKu36CxqFVkMWFabEQL5Y9jnWuDc",
//   authDomain: "",
//   databaseURL: "https://hashimi-6f50c.firebaseio.com",
//   projectId: "hashimi-6f50c",
//   storageBucket: "hashimi-6f50c.appspot.com",
//   messagingSenderId: "509017830918",
//   appId: "1:509017830918:web:316327cafcc447265d7587"
// };
// var firebaseConfig = {
  
  
  
  
//   storageBucket: "hashimi-6f50c.appspot.com",
  
//   appId: "1:509017830918:web:316327cafcc447265d7587"
// };

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Get a reference to the place in the database where the user is stored
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return getUserDocumentRef(userAuth.uid);
};

export const getUserDocumentRef = async uid => {
  if (!uid) return null;

  try {
    return firestore.doc(`users/${uid}`);
  } catch (error) {
    console.error('error fetching user', error.message);
  }
};

export default firebase;
