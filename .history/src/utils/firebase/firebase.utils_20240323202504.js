// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore,
  doc,
  getDoc,
  setDoc
}
from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSbtX8Lr-Ge1lr_0ujM7X4PZbMwF4Q-Lk",
  authDomain: "crwn-c1c5a.firebaseapp.com",
  projectId: "crwn-c1c5a",
  storageBucket: "crwn-c1c5a.appspot.com",
  messagingSenderId: "288480389284",
  appId: "1:288480389284:web:0f3e7e9a49d43be3285e31"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
     
     prompt:"select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();
 
export const createUserDocumentFromAuth = async(userAuth) =>{
  const userDocRef=  doc(db,'users',userAuth.uid);

  console.log(userDocRef);

//  const usersnapshot =  await getDoc(userDocRef);
//  console.log(usersnapshot);   
//  if (!usersnapshot.exists()) {
//   const { displayName, email } = userAuth;
//   const createdAt = new Date();

//   try {
//     await setDoc(userDocRef, {
//       displayName,
//       email,
//       createdAt,
//     });
//   } catch (error) {
//     console.log('error creating the user', error.message);
//   }
// }

return userDocRef;
}