import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyBf1dUtfd0woz2rZn1Pw-boyPfNwbOy1DY',
  authDomain: 'hangout-firebase.firebaseapp.com',
  databaseURL: 'https://hangout-firebase.firebaseio.com',
  projectId: 'hangout-firebase',
  storageBucket: 'hangout-firebase.appspot.com',
  messagingSenderId: '186845498615',
  appId: '1:186845498615:web:a9dfb6db305c83a391d7f2',
  measurementId: 'G-T8VPW5D033',
};

const firebaseProvider = firebase.initializeApp(config);
export default firebaseProvider;
