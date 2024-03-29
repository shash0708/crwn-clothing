// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSbtX8Lr-Ge1lr_0ujM7X4PZbMwF4Q-Lk",
  authDomain: "crwn-c1c5a.firebaseapp.com",
  projectId: "crwn-c1c5a",
  storageBucket: "crwn-c1c5a.appspot.com",
  messagingSenderId: "288480389284",
  appId: "1:288480389284:web:0f3e7e9a49d43be3285e31"
};

let app;

// Initialize Firebase
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
     
     prompt:'select_account',
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore(app);
 
export const createUserDocumentFromAuth = async(userAuth) =>{
  const userDocRef=  doc(db,"users",userAuth.uid);

  console.log(userDocRef);

 const usersnapshot =await   getDoc(userDocRef);
 console.log(usersnapshot);   
 if (!usersnapshot.exists()) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
    });
  } catch (error) {
    console.log('error creating the user', error.message);
  }
}

return userDocRef;
}