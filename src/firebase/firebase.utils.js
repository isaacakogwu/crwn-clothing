import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBKdeTFkn0uW1MUSvTzhjyen8xKEs3kGJo',
  authDomain: 'crwn-db-39b0f.firebaseapp.com',
  databaseURL: 'https://crwn-db-39b0f.firebaseio.com',
  projectId: 'crwn-db-39b0f',
  storageBucket: '',
  messagingSenderId: '177200420067',
  appId: '1:177200420067:web:d5d427346ca92185'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
