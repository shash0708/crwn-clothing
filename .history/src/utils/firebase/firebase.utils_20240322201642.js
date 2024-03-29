// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,sigInWithPopup,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZIdWFd5WDNGV04gPPI72Gam1aUJCiq-k',
  authDomain: 'crwn-clothing-db-5b62a.firebaseapp.com',
  projectId: 'crwn-clothing-db-5b62a',
  storageBucket: 'crwn-clothing-db-5b62a.appspot.com',
  messagingSenderId: '821106263772',
  appId: '1:821106263772:web:939be9cbdee8845f995619'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
     
     prompt:"select_account"
});
