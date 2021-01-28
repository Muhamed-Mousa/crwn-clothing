import firebase from 'firebase/firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBu7GPHHuJ6pSeSDPzlAhwk0J-bHMp9Mbc",
    authDomain: "clothes-shop-c4276.firebaseapp.com",
    projectId: "clothes-shop-c4276",
    storageBucket: "clothes-shop-c4276.appspot.com",
    messagingSenderId: "863432320271",
    appId: "1:863432320271:web:ed6d5b34e9523bb3c68a7a",
    measurementId: "G-XNXSH0M31Q"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{ 
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef

  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;