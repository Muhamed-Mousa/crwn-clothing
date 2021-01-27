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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select-account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;